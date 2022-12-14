const config = require("../configs/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
      host: config.HOST,
      dialect: config.dialect,
      pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
      }
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "UserRolesDetails",
  foreignKey: "RoleId",
  otherKey: "UserId"
});
db.user.belongsToMany(db.role, {
  through: "UserRolesDetails",
  foreignKey: "UserId",
  otherKey: "RoleId"
});

db.ROLES = ["user", "admin"];

module.exports = db;