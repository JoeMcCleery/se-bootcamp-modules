import { test, expect } from "@jest/globals";
import { sum, sub, mul, div } from "./index";

// Sum tests
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1 + -2 to equal -1", () => {
  expect(sum(1, -2)).toBe(-1);
});

// Sub tests
test("subtracts 1 - 2 to equal -1", () => {
  expect(sub(1, 2)).toBe(-1);
});

test("subtracts 1 - -2 to equal 3", () => {
  expect(sub(1, -2)).toBe(3);
});

// Mul tests
test("multiplies 1 * 2 to equal 2", () => {
  expect(mul(1, 2)).toBe(2);
});

test("multiplies 1 * -2 to equal -2", () => {
  expect(mul(1, -2)).toBe(-2);
});

// Div tests
test("divides 1 / 2 to equal 0.5", () => {
  expect(div(1, 2)).toBe(0.5);
});

test("divides 1 / -2 to equal -0.5", () => {
  expect(div(1, -2)).toBe(-0.5);
});
