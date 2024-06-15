const request = require("supertest");
const app = require("./app");

// generate some random numbers to test the calculator
let number1 = Math.floor(Math.random() * 1_000_000);
let number2 = Math.floor(Math.random() * 1_000_000) + 1;

const tests = [
  { pathSegment: "add", expected: { result: number1 + number2 } },
  { pathSegment: "subtract", expected: { result: number1 - number2 } },
  { pathSegment: "divide", expected: { result: number1 / number2 } },
  { pathSegment: "multiply", expected: { result: number1 * number2 } },
];

describe("Calculator Routes", () => {
  tests.forEach((test) => {
    it(`GET /calculator/${test.pathSegment}`, () => {
      return request(app)
        .get(`/calculator/${test.pathSegment}?num1=${number1}&num2=${number2}`)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual(test.expected);
        });
    });
  });
});
