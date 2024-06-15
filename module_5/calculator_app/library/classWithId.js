class ClassWithId {
  constructor() {
    this.id = Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER);
  }
}

module.exports = ClassWithId;
