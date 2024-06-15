function getNumbers(req) {
  return [parseInt(req.query.num1), parseInt(req.query.num2)];
}

function add(req, res) {
  let [number1, number2] = getNumbers(req);
  let result = number1 + number2;
  res.status(200).json({ result });
}

function subtract(req, res) {
  let [number1, number2] = getNumbers(req);
  let result = number1 - number2;
  res.status(200).json({ result });
}

function divide(req, res) {
  let [number1, number2] = getNumbers(req);
  let result = number1 / number2;
  res.status(200).json({ result });
}

function multiply(req, res) {
  let [number1, number2] = getNumbers(req);
  let result = number1 * number2;
  res.status(200).json({ result });
}

module.exports = {
  add,
  subtract,
  divide,
  multiply,
};
