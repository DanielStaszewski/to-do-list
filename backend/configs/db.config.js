module.exports = {
    HOST: "MSI-DANIEL",
    USER: "Daniel",
    PASSWORD: "daniel123",
    DB: "todolist",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };