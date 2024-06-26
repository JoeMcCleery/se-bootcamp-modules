// 8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.
// b) Create a new object for a different city with different properties and call your function
// again with the new object.
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

// a
function print(obj) {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
function fancyPrint(obj) {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}
print(sydney);

// b
const perth = {
  name: "Perth",
  state: "WA",
  timezone: "Australia/Perth",
  isDope: true,
};
print(perth);
