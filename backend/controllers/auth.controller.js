const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");
const config = require("../configs/auth.config");
const { user: User, role: Role, refreshToken: RefreshToken } = db;
const convertBase64 = require('../utils/file-to-base64.function');

const Op = db.Sequelize.Op;

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    Name: req.body.name,
    Surname: req.body.surname,
    Email: req.body.email,
    Password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        Role.findOne({
          where: { Name: "User" }
        })
        .then(
          role => {
            return user.setRoles(role);
          }
        )
        .then(() => {
          res.send({ message: "User was registered successfully!" });
        })
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      Email: req.body.email
    }
  })
    .then(async (user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.Password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      const token = jwt.sign({ id: user.Id }, config.secret, {
        expiresIn: config.jwtExpiration
      });

      let refreshToken = await RefreshToken.createToken(user);

      const userImage = user.Image ? convertBase64(user.Image) : null;

      const authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].Name.toUpperCase());
        }
        res.status(200).send({
          id: user.Id,
          name: user.Name,
          surname: user.Surname,
          email: user.Email,
          image: userImage,
          roles: authorities,
          accessToken: token,
          refreshToken: refreshToken
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};


exports.refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;

  if (requestToken == null) {
    return res.status(403).json({ message: "Refresh Token is required!" });
  }

  try {
    let refreshToken = await RefreshToken.findOne({ where: { Token: requestToken } });

    if (!refreshToken) {
      res.status(403).json({ message: "Refresh token is not in database!" });
      return;
    }

    if (RefreshToken.verifyExpiration(refreshToken)) {
      RefreshToken.destroy({ where: { Id: refreshToken.id } });
      
      res.status(403).json({
        message: "Refresh token was expired. Please make a new signin request",
      });
      return;
    }

    const user = await refreshToken.getUser();
    let newAccessToken = jwt.sign({ id: user.Id }, config.secret, {
      expiresIn: config.jwtExpiration,
    });

    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: refreshToken.Token,
    });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};