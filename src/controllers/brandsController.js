const Brands = require("../models/brands");
const validateData = require("../validation/brandValidation");
const {
  addBrands,
  findAllbrands,
  findBrandById,
  updateBrands,
  deleteBrand,
} = require("../services/brandServices");

exports.postAddBrands = (req, res, next) => {
  return addBrands(req, res);
};

exports.getAllBrands = (req, res, next) => {
  return findAllbrands(req, res);
};

exports.getBrandById = (req, res, next) => {
  return findBrandById(req, res);

  // Brands.findByPk(id)
  //   .then((result) => {
  //     res.status(200).send(result);
  //   })
  //   .catch((err) => {
  //     res.status(404).send(err);
  //   });
};
exports.updateBrand = (req, res, next) => {
  return updateBrands(req, res);
};

exports.deleteBrands = (req, res, next) => {
  return deleteBrand(req, res);
};
