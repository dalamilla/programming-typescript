/**
 * 2520 is the smallest number that can be divided by each of  the numbers from
 * 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?
 */

/**
 * Solution of fifth Euler problem.
 * @param {number} n - Limit number for evenly divisible positive.
 * @return -  The smallest positive number that is evenly divisible by
 *         all of the numbers from 1 to n.
 */
function Euler005(n: number): number {
  let found = true;
  let number = 0;

  while (found) {
    let i = 1;
    number += n;

    while (number % i === 0 && i <= n) {
      if (i === n) {
        found = false;
      }
      i++;
    }
  }

  return number;
}

export { Euler005 };
