const Calculator = require("../library/calculatorLibrary");
const calc = new Calculator();

function getNumbers(req) {
  return [parseInt(req.query.num1), parseInt(req.query.num2)];
}

function calculate(req, res, func) {
  let [number1, number2] = getNumbers(req);
  let result = func(number1, number2);
  res.status(200).json({ result });
}

function add(req, res) {
  calculate(req, res, calc.add);
}

function subtract(req, res) {
  calculate(req, res, calc.subtract);
}

function divide(req, res) {
  calculate(req, res, calc.divide);
}

function multiply(req, res) {
  calculate(req, res, calc.multiply);
}

module.exports = {
  add,
  subtract,
  divide,
  multiply,
};
