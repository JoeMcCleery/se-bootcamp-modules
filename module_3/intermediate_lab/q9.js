// 9. Given the below salaries object, perform the following tasks.
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};
// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
// b) Write a function topEarner(salaries) that calculates and returns the name of the person
// earning the highest salary

// a)
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
}
console.log(sumSalaries(salaries));

// b)
function topEarner(salaries) {
  const arr = Object.entries(salaries);
  let top = arr[1];
  for (const entry of arr.splice(1)) {
    if (top[1] < entry[1]) top = entry;
  }
  return top[0];
}
console.log(topEarner(salaries));
