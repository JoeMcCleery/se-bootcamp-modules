// 6. Use the Function prototype to add a new delay(ms) function to all functions, which can
// be used to delay the call to that function by ms milliseconds.
function multiply(...args) {
  console.log(args.reduce((acc, n) => acc * n, 1));
}

// a) Use the example multiply function below to test it with, as above, and assume that all
// delayed functions will take two parameters
// b) Use apply to improve your solution so that delayed functions can take any number of
// parameters
// c) Modify multiply to take 4 parameters and multiply all of them, and test that your
// delay prototype function still works.

// 0, a) b)
Function.prototype.delay = function (ms = 500) {
  return (...args) => setTimeout(() => this.apply(this, args), ms);
};
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

// c)
multiply.delay(600)(5, 5, 5, 5);
