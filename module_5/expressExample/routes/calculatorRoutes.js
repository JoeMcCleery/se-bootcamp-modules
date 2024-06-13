const express = require("express");
const calculatorController = require("../controller/calculatorController");
const router = express.Router();

// new route for adding two numbers
router.get("/add", (request, response) => {
  let number1 = parseInt(request.query.num1);
  let number2 = parseInt(request.query.num2);

  let sum = number1 + number2;

  // setting the response object to status 200 (successful request) and the response will have a object that we can pull out

  response.status(200);
  response.json({ result: sum });
});

router.get("/subtraction", (request, response) => {
  let number1 = parseInt(request.query.num1);
  let number2 = parseInt(request.query.num2);

  let sum = number1 - number2;

  // setting the response object to status 200 (successful request) and the response will have a object that we can pull out

  response.status(200);
  response.json({ result: sum });
});

router.get("/divide", (request, response) => {
  let number1 = parseInt(request.query.num1);
  let number2 = parseInt(request.query.num2);

  let sum = number1 / number2;

  // setting the response object to status 200 (successful request) and the response will have a object that we can pull out

  response.status(200);
  response.json({ result: sum });
});

module.exports = router;
