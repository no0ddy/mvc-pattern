const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Patrons = sequelize.define("patrons", {
  patronId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mobileNo: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  PAN: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  aadharNo: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Patrons;
