console.log("hello world");

function sayHello() {
  console.log("hello");
}
sayHello();

function sum(a, b) {
  return a + b;
}
console.log(sum(5, 1));

// Exercise 4

const subtract = (a, b) => a - b;
const add = (a, b) => a + b;
const divide = (a, b) => (b == 0 ? 0 : a / b);
const multiply = (a, b) => a * b;

console.log(subtract(5, 2));
console.log(add(5, 2));
console.log(divide(5, 2));
console.log(multiply(5, 2));

const greet = (name) => `Hello ${name}`;

console.log(greet("John"));

// Extra

class Person {
  constructor(name, age, favFood) {
    this.name = name;
    this.age = age;
    this.favFood = favFood;
  }

  details() {
    console.log(
      `${this.name} is ${this.age} years old and their favourite food is ${this.favFood}`,
    );
  }
}

const joe = new Person("Joe", 29, "Spaghetti");

joe.details();
