const Sequelize = require("sequelize");

const sequelize = new Sequelize("klub_works", "root", "N@veen2911", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

module.exports = sequelize;
