/**
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms.
 * By starting with 1 and 2, the first 10 terms will be:
 *                      1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence whose values do not exceed
 * four million, find the sum of the even-valued terms.
 */

/**
 * Solution of second Euler problem.
 * @param {number} n - Value that limit the sum of Fibonacci numbers.
 * @return {number} - The sum of even Fibonacci numbers below n.
 */
function Euler002(n: number): number {
  let sum = 0;

  let fib0 = 0;
  let fib1 = 1;
  let fib2 = fib0 + fib1;

  while (fib2 <= n) {
    if (fib2 % 2 == 0) {
      sum += fib2;
    }
    fib0 = fib1;
    fib1 = fib2;
    fib2 = fib0 + fib1;
  }

  return sum;
}

export { Euler002 };
