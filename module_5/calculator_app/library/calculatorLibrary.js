const ClassWithId = require("./classWithId");
const Logger = require("./loggerLibrary");

class Calculator extends ClassWithId {
  #logger;

  constructor() {
    super();

    this.#logger = new Logger();
  }

  add = (num1, num2) => {
    const value = num1 + num2;
    this.#logger.log(this, value);
    return value;
  };

  subtract = (num1, num2) => {
    const value = num1 - num2;
    this.#logger.log(this, value);
    return value;
  };

  divide = (num1, num2) => {
    const value = num1 / num2;
    this.#logger.log(this, value);
    return value;
  };

  multiply = (num1, num2) => {
    const value = num1 * num2;
    this.#logger.log(this, value);
    return value;
  };
}

module.exports = Calculator;
