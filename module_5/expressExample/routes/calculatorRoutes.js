const express = require("express");
const calcController = require("../controller/calculatorController");
const router = express.Router();

// new route for adding two numbers
router.get("/add", (req, res) => calcController.add(req, res));

router.get("/subtraction", (req, res) => calcController.subtract(req, res));

router.get("/divide", (req, res) => calcController.divide(req, res));

router.get("/multiply", (req, res) => calcController.multiply(req, res));

module.exports = router;
