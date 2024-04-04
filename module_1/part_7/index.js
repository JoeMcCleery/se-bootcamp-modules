// Exercise 5

function logArray() {
  console.log(`length: ${arr.length} | array: ${arr}`);
}

let arr = new Array();

for (let i = 0; i < 5; i++) {
  arr[i] = i + 1;
}

logArray();

arr[0] = "one";
arr[3] = "four";

logArray();

arr.unshift("zero");

logArray();

arr.pop();

logArray();

// Exercise 6

function logBook() {
  console.log(`book object: ${book}`);
  console.log(`title: ${book.title}`);
  console.log(`description: ${book.description}`);
  console.log(`author: ${book.author}`);
  console.log(`numPages: ${book.numPages}`);
}

const book = {
  title: "koob",
  description: "backwards book",
  author: "joe",
  numPages: 69,
};

logBook(book);

book.description = "A book with no actual content";

logBook(book);
