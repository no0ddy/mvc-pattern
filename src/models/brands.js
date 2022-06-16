const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Brands = sequelize.define("brands", {
  brandId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  brandName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  websiteURL: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true,
    validate: {
      isUrl: true,
    },
  },
  legalName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  legalConstitution: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  BusinessPAN: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  dateOfIncorporation: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
  },
  cin_llp: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Brands;
