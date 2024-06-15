const ClassWithId = require("./classWithId");
const Logger = require("./loggerLibrary");
const logger = new Logger();

class Calculator extends ClassWithId {
  add = (num1, num2) => {
    const value = num1 + num2;
    logger.log(this, value);
    return value;
  };

  subtract = (num1, num2) => {
    const value = num1 - num2;
    logger.log(this, value);
    return value;
  };

  divide = (num1, num2) => {
    const value = num1 / num2;
    logger.log(this, value);
    return value;
  };

  multiply = (num1, num2) => {
    const value = num1 * num2;
    logger.log(this, value);
    return value;
  };
}

module.exports = Calculator;
