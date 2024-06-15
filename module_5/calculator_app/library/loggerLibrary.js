const ClassWithId = require("./classWithId");

class Logger extends ClassWithId {
  log(caller, value) {
    console.log(`[${caller.constructor.name}: ${caller.id}]: ${value}`);
  }
}

module.exports = Logger;
