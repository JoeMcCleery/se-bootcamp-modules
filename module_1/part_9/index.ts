/**
 * Add number a and number b.
 * @param {number} a number a.
 * @param {number} b number b.
 * @returns {number} a + b.
 */
export function sum(a: number, b: number): number {
  return a + b;
}

/**
 * Subtract number b from number a.
 * @param {number} a number a.
 * @param {number} b number b.
 * @returns {number} a - b.
 */
export function sub(a: number, b: number): number {
  return a - b;
}

/**
 * Multiply number a by number b.
 * @param {number} a number a.
 * @param {number} b number b.
 * @returns {number} a * b.
 */
export function mul(a: number, b: number): number {
  return a * b;
}

/**
 * Divide number a by number b.
 * @param {number} a number a.
 * @param {number} b number b.
 * @returns {number | undefined} a / b. If b is 0 returns undefined.
 */
export function div(a: number, b: number): number | undefined {
  return b === 0 ? undefined : a / b;
}
