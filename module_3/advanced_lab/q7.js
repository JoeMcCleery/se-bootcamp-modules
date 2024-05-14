// 7. In JavaScript, the toString method is used to convert an object to a string representation.
// By default, when an object is converted to a String, it returns a string that looks something
// like [object Object].
// However, we can define our own toString methods for custom objects to provide a more
// meaningful string representation.
// a) Define a custom toString method for the Person object that will format and print
// their details
// b) Test your method by creating 2 different people using the below constructor function
// and printing them
// c) Create a new constructor function Student that uses call to inherit from Person and
// add an extra property cohort
// d) Add a custom toString for Student objects that formats and prints their details. Test
// with 2 students.
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
const person1 = new Person("James Brown", 73, "male");
console.log("person1: " + person1); //prints person1: [object Object]

// a)
Person.prototype.toString = function () {
  return `{\n  name: ${this.name},\n  age: ${this.age},\n  gender: ${this.gender}\n}`;
};

// b)
const person2 = new Person("James Browner", 74, "male");
const person3 = new Person("Jamesette Brown", 73, "female");
console.log("person1: " + person2);
console.log("person3: " + person3);

// c)
function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

// d)
Student.prototype.toString = function () {
  return `name: ${this.name}, age: ${this.age}, gender: ${this.gender}, cohort: ${this.cohort}`;
};
const student1 = new Student("bob", 24, "male", "part-time");
const student2 = new Student("bobette", 24, "female", "full-time");
console.log("student1: " + student1);
console.log("student2: " + student2);
