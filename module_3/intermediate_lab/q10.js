// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:
const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");
// a) Print the total number of minutes that have passed so far today
// b) Print the total number of seconds that have passed so far today
// c) Calculate and print your age as: 'I am x years, y months and z days old'
// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
// of days in between the two given dates.

// a)
console.log(`${today.getMinutes()} minutes have passed so far today`);

// b)
console.log(`${today.getSeconds()} seconds have passed so far today`);

// c)
// Not perfect (but good enough)
function printAge(birthDate) {
  const dateDiff = new Date(today - birthDate);
  console.log(
    `I am ${
      dateDiff.getFullYear() - 1970
    } years, ${dateDiff.getMonth()} months and ${dateDiff.getDate()} days old`
  );
}
const bd = new Date("1994-05-03");
printAge(bd);

// d)
function daysInBetween(date1, date2) {
  const msDay = 24 * 60 * 60 * 1000;
  console.log((new Date(date2 - date1) / msDay).toFixed(2));
}
daysInBetween(bd, today);
