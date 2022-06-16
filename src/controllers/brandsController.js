const Brands = require("../models/brands");
const validateData = require("../validation/brandValidation");

exports.postAddBrands = (req, res, next) => {
  const {
    brandName,
    email,
    websiteURL,
    legalName,
    legalConstitution,
    BusinessPAN,
    dateOfIncorporation,
    cin_llp,
  } = req.body;
  let { error } = validateData.validate(req.body);

  if (error) {
    res.status(400).send(error.message);
  } else {
    Brands.create({
      brandName: brandName,
      email: email,
      websiteURL: websiteURL,
      legalName: legalName,
      legalConstitution: legalConstitution,
      BusinessPAN: BusinessPAN,
      dateOfIncorporation: dateOfIncorporation,
      cin_llp: cin_llp,
    })
      .then((result) => {
        console.log(result);
        res.status(201).send("Data added successfully.");
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send(err.errors[0].message);
      });
  }
};

exports.getAllBrands = (req, res, next) => {
  Brands.findAll()
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(404).send("Error 404"));
};

exports.getBrandById = (req, res, next) => {
  const id = req.params.id;

  Brands.findAll({ where: { brandId: id } })
    .then((result) => {
      if (result.length) {
        res.status(200).send(result);
      } else {
        res.status(404).send("ID don't exist.");
      }
    })
    .catch((err) => res.status(404).send("Error 404"));

  // Brands.findByPk(id)
  //   .then((result) => {
  //     res.status(200).send(result);
  //   })
  //   .catch((err) => {
  //     res.status(404).send(err);
  //   });
};
exports.updateBrand = (req, res, next) => {
  const {
    brandName,
    email,
    websiteURL,
    legalName,
    legalConstitution,
    BusinessPAN,
    dateOfIncorporation,
    cin_llp,
  } = req.body;
  const id = req.params.id;
  let { error } = validateData.validate(req.body);

  if (error) {
    res.status(400).send(error.message);
  } else {
    Brands.findByPk(id)
      .then((result) => {
        result.brandName = brandName;
        result.email = email;
        result.websiteURL = websiteURL;
        result.legalName = legalName;
        result.legalConstitution = legalConstitution;
        result.BusinessPAN = BusinessPAN;
        result.dateOfIncorporation = dateOfIncorporation;
        result.cin_llp = cin_llp;
        return result.save();
      })
      .then((result) => {
        res.status(200).send("Data successfully updated.");
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  }
};

exports.deleteBrands = (req, res, next) => {
  const id = req.params.id;
  Brands.destroy({ where: { brandId: id } })
    .then((result) => res.status(200).send("Deleted successfully."))
    .catch((err) => res.status(404).send(err));
};
