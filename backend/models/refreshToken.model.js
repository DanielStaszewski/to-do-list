const config = require("../configs/auth.config");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, Sequelize) => {
    const RefreshToken = sequelize.define("RefreshToken", {
      Token: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      ExpiryDate: {
        type: Sequelize.DATE,
      },
    });
  
    RefreshToken.createToken = async function (user) {
      let expiredAt = new Date();
  
      expiredAt.setSeconds(expiredAt.getSeconds() + config.jwtRefreshExpiration);
  
      let _token = uuidv4();
  
      let refreshToken = await this.create({
        Token: _token,
        UserId: user.Id,
        ExpiryDate: expiredAt.getTime(),
      });
  
      return refreshToken.Token;
    };
  
    RefreshToken.verifyExpiration = (token) => {
      return token.ExpiryDate.getTime() < new Date().getTime();
    };
  
    return RefreshToken;
  };