// 2. The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.
// a) What order will the four tests below print in? Why?
// b) Rewrite delayMsg as an arrow function
// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
// d) Use clearTimeout to prevent the fifth test from printing at all.
function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}
setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

// a)
// "#4: Not delayed at all"
// "#3: Delayed by 0ms"
// "#2: Delayed by 20ms"
// "#1: Delayed by 100ms"
// Reverse order. Because there is a delay before the message is printed????

// b)
const delayMsg_arrow = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

// c
const timeout = setTimeout(delayMsg_arrow, 10000, "#5: Delayed by 10000ms");

// d)
clearTimeout(timeout);
