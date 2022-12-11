const { Sequelize } = require("sequelize");

module.exports = (sequalize, Sequelize) => {
    const User = sequalize.define(
        "Users", {
            Id: {
                type: 'UNIQUEIDENTIFIER',
                primaryKey: true
            },
            Name: {
                type: Sequelize.STRING
            },
            Surname: {
                type: Sequelize.STRING
            },
            Email: {
                type: Sequelize.STRING
            },
            Image: {
                type: Sequelize.STRING.BINARY
            },
            Password: {
                type: Sequelize.STRING
            }
        }
    )
    return User;
}