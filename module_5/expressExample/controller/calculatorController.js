function getNumbers(req) {
  return [parseInt(req.query.num1), parseInt(req.query.num2)];
}

function add(req, res) {
  let [number1, number2] = getNumbers(req);
  let sum = number1 + number2;
  res.status(200).json({ result: sum });
}

function subtract(req, res) {
  let [number1, number2] = getNumbers(req);
  let sum = number1 - number2;
  res.status(200).json({ result: sum });
}

function divide(req, res) {
  let [number1, number2] = getNumbers(req);
  let sum = number1 / number2;
  res.status(200).json({ result: sum });
}

function multiply(req, res) {
  let [number1, number2] = getNumbers(req);
  let sum = number1 * number2;
  res.status(200).json({ result: sum });
}

module.exports = {
  add,
  subtract,
  divide,
};
