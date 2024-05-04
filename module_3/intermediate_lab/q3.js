// 3. Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:

// https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Global_Objects/Array

// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.

const animals = ["Tiger", "Giraffe"];
console.log(animals);

// a
animals.push("Bear", "Snake");
console.log(animals);

// b
animals.unshift("Turtle", "Snail");
console.log(animals);

// c
animals.sort();
console.log(animals);

// d
function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.round(animals.length / 2);
  animals[middleIndex] = newValue;
}
replaceMiddleAnimal("Chicken");
console.log(animals);

// e
function findMatchingAnimals(beginsWith) {
  const testStr = beginsWith.toLowerCase();
  return animals.filter((a) => a.toLowerCase().startsWith(testStr));
}
console.log(findMatchingAnimals("t"));
console.log(findMatchingAnimals("T"));
