// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function
// syntax. Test each version to make sure they work the same.

function getGreeting(name) {
  return "Hello " + name + "!";
}

// Answer
// a
const getGreetings_function = function (name) {
  return "Hello " + name + "!";
};

// b
const getGreetings_arrow = (name) => {
  return "Hello " + name + "!";
};
