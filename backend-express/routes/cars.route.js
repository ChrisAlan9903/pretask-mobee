const express = require("express");
const router = express.Router();
const carController = require("../controllers/cars.controller");

router.get("/", carController.getAllCars);
router.get("/:carId", carController.getOneCar);
router.post("/", carController.createOneCar);
router.put("/:carId", carController.updateOneCar);
router.delete("/:carId", carController.deleteOneCar);

module.exports = router;
