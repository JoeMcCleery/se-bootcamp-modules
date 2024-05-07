// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
// sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in
// the Fibonacci sequence every second.
// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing
// c) Extend one of the above functions to accept a limit argument, which tells it how many
// numbers to print before stopping.

// a) c)
function printFibonacci(limit) {
  let count = 0;
  let num1 = 1;
  let num2 = 0;
  const interval = setInterval(() => {
    const next = num1 + num2;
    console.log("interval", next);
    num1 = num2;
    num2 = next;
    if (++count == limit) {
      clearInterval(interval);
    }
  }, 1000);
}
printFibonacci(5);

// b) c)
function printFibonacciTimeouts(limit) {
  let count = 0;
  let num1 = 1;
  let num2 = 0;

  const printNextNumber = () => {
    setTimeout(() => {
      const next = num1 + num2;
      console.log("timeout", next);
      num1 = num2;
      num2 = next;
      if (++count < limit) {
        printNextNumber();
      }
    }, 1000);
  };
  printNextNumber();
}
printFibonacciTimeouts(5);
