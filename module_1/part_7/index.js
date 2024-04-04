(function () {
  var logger = document.getElementById("log");
  print = function () {
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == "object") {
        logger.innerHTML +=
          (JSON && JSON.stringify
            ? JSON.stringify(arguments[i], undefined, 2)
            : arguments[i]) + "<br />";
      } else {
        logger.innerHTML += arguments[i] + "<br />";
      }
    }
  };
})();

// Exercise 5

function printArray() {
  print(`length: ${arr.length} | array: ${arr}`);
}

let arr = new Array();

for (let i = 0; i < 5; i++) {
  arr[i] = i + 1;
}

printArray();

arr[0] = "one";
arr[3] = "four";

printArray();

arr.unshift("zero");

printArray();

arr.pop();

printArray();

// Exercise 6

function printBook() {
  print(`book object: ${book}`);
  print(`title: ${book.title}`);
  print(`description: ${book.description}`);
  print(`author: ${book.author}`);
  print(`numPages: ${book.numPages}`);
}

const book = {
  title: "koob",
  description: "backwards book",
  author: "joe",
  numPages: 69,
};

printBook();

book.description = "A book with no actual content";

printBook();
