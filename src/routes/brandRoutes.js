const Router = require("express");
const controller = require("../controllers/brandsController");
const router = Router();

router.post("/", controller.postAddBrands);
router.get("/", controller.getAllBrands);
router.get("/:id", controller.getBrandById);
router.put("/:id", controller.updateBrand);
router.delete("/:id", controller.deleteBrands);

module.exports = router;
