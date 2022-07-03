const validateData = require("../validation/brandValidation");
const Brands = require("../models/brands");

exports.addBrands = (req, res) => {
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
    return res.status(400).send(error.message);
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
        // console.log(result);
        return res.status(201).send("Data added successfully.");
      })
      .catch((err) => {
        return res.status(400).send(err.errors[0].message);
      });
  }
};

exports.findAllbrands = (req, res) => {
  Brands.findAll()
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(404).send("Error, no data found"));
};

exports.findBrandById = (req, res) => {
  const id = req.params.id;

  Brands.findAll({ where: { brandId: id } })
    .then((result) => {
      if (result.length) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send("ID don't exist.");
      }
    })
    .catch((err) => res.status(404).send("Error 404"));
};

exports.updateBrands = (req, res) => {
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
    return res.status(400).send(error.message);
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
        return res.status(200).send("Data successfully updated.");
      })
      .catch((err) => {
        return res.status(404).send(err);
      });
  }
};

exports.deleteBrand = (req, res) => {
  const id = req.params.id;
  Brands.destroy({ where: { brandId: id } })
    .then((result) => res.status(200).send("Deleted successfully."))
    .catch((err) => res.status(404).send(err));
};
