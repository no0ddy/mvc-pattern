const Joi = require("joi");

let validateBrand = Joi.object({
  brandName: Joi.string().required(),
  email: Joi.string().email().required(),
  websiteURL: Joi.string().uri(),
  legalName: Joi.string().required(),
  legalConstitution: Joi.string().required(),
  BusinessPAN: Joi.string().alphanum().min(10).max(10).required(),
  dateOfIncorporation: Joi.string().required(),
  cin_llp: Joi.string().required(),
});
module.exports = validateBrand;
