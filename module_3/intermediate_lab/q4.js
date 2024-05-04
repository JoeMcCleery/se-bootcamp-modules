// 4. a) Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

// a)
function camelCase(cssProp) {
  return cssProp
    .split("-")
    .map((word, i) =>
      i == 0 ? word : `${word[0].toUpperCase()}${word.substring(1)}`
    )
    .join("");
}

// b
function camelCase_forLoop(cssProp) {
  const words = cssProp.split("-");
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    words[i] = `${word[0].toUpperCase()}${word.substring(1)}`;
  }
  return words.join("");
}

function camelCase_forOfLoop(cssProp) {
  const words = cssProp.split("-");
  let camel = words[0];
  for (let word of words.slice(1)) {
    camel += `${word[0].toUpperCase()}${word.substring(1)}`;
  }
  return camel;
}

// c
// See above^^^
