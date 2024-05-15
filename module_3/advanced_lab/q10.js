// 10.Fetch is a browser-based function to send a request and receive a response from a server,
// which uses promises to handle the asynchronous response.
// The below fetchURLData uses fetch to check the response for a successful status
// code, and returns a promise containing the JSON sent by the remote server if successful
// or an error if it failed. (To run this code in a node.js environment, follow the instructions in
// the comments before the function.)
// a) Write a new version of this function using async/await
// b) Test both functions with valid and invalid URLs
// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
// using Promise.all to combine the results.

//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
// NOTE: fetch is built in, no need to install it
function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data, "promise"))
  .catch((error) => console.error(error.message, "promise"));

// a)
async function fetchURLDataAsync(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    return await response.json();
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
}
// b)
fetchURLData("https://jsonplaceholder{invalid}.typicode.com/todos/1")
  .then((data) => console.log(data, "promise"))
  .catch((error) => console.error(error.message, "promise"));
fetchURLDataAsync("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data, "async"))
  .catch((error) => console.error(error.message, "async"));
fetchURLDataAsync("https://jsonplaceholder{invalid}.typicode.com/todos/1")
  .then((data) => console.log(data, "async"))
  .catch((error) => console.error(error.message, "async"));

// c)
async function fetchURLDataAllAsync(...urls) {
  return await Promise.all(urls.map((url) => fetchURLDataAsync(url)));
}
fetchURLDataAllAsync(
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3"
)
  .then((data) => console.log(data, "all-async"))
  .catch((error) => console.error(error.message, "all-async"));
fetchURLDataAllAsync(
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder{invalid}.typicode.com/todos/3"
)
  .then((data) => console.log(data, "all-async"))
  .catch((error) => console.error(error.message, "all-async"));
