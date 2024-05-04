// 3. Which of the following console.log messages will print? Why?

if (0) console.log("#1 zero is true");
if ("0") console.log("#2 zero is true"); // non-empty string is truthy
if (null) console.log("null is true");
if (-1) console.log("negative is true"); // non-0 number is truthy
if (1) console.log("positive is true"); // non-0 number is truthy
