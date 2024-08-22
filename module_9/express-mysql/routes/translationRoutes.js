const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches POST requests sent to /api/translate
router.post("/", (req, res) => {
  Controllers.translationController.translateText(req.body, res);
});

module.exports = router;
