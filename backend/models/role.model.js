module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("Roles", {
    Id: {
            type: 'UNIQUEIDENTIFIER',
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
    },
    Name: {
        type: Sequelize.STRING
      }
    });
  
    return Role;
  };