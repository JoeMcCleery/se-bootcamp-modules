// 10. The following constructor function creates a new Person object with the given name and
// age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate
// variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a
// third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true
// if the person is old enough to drive.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = () => this.age >= 16;
}

// a
const person1 = new Person("Joe", 29);

// b
const person2 = new Person("Bob", 69);

// c
console.log(person1);
console.log(person2);

// d
class PersonClass {
  name;
  age;
  human = true;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Use function syntax to have access to "this"
  canDrive = function () {
    return this.age >= 16;
  };
}

const person3 = new PersonClass("Jeff", 5);
console.log(person3);

// e
console.log(person1.canDrive());
console.log(person2.canDrive());
console.log(person3.canDrive());
