const express = require("express");
const router = express.Router();

router.get("/test", (request, response) => {
  response.send("This is a test route");
});

router.get("/testTwo", (request, response) => {
  response.send("This is a second test route");
});

module.exports = router;
