// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

console.log(ucFirstLetters("los angeles")); //Los Angeles

// Answer

function ucFirstLetters(str) {
  return str
    .split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
    .join(" ");
}
