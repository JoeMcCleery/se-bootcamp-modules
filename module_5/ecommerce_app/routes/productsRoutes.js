const express = require("express");
const router = express.Router();
const productsController = require("../controller/productsController.js");

router.get("/", (req, res) => productsController.get(req, res));

router.get("/categories", (req, res) =>
  productsController.categories(req, res)
);

module.exports = router;
