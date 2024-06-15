const ClassWithId = require("./classWithId");

class Logger extends ClassWithId {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  log = (value) => {
    console.log(`[${this.name}: ${this.id}]: ${value}`);
  };
}

module.exports = Logger;
