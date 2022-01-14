/**
 * A palindromic number reads the same both ways. The largest palindrome made from
 * the product of two 2-startDigit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-startDigit numbers.
 */

/**
 * Solution of fourth Euler problem.
 * @param {number} n - Number of n-startDigit.
 * @return {number} - The largest palindrome made from the product of two n-startDigit numbers.
 */
function Euler004(n: number): number {
  let startDigit = Math.pow(10, n - 1);
  let endDigit = Math.pow(10, n);
  let max = 0;

  for (let i = startDigit; i < endDigit; i++) {
    for (let j = startDigit; j < endDigit; j++) {
      if (isPalindrome(i * j) && i * j > max) {
        max = i * j;
      }
    }
  }

  return max;
}

/**
 * Helper function of fourth Euler problem.
 * @param {number} n - Number to check if it's palindrome.
 * @return {boolean} - It's the number a palindrome.
 */
function isPalindrome(n: number): boolean {
  let pali = n.toString();
  return pali === pali.split("").reverse().join("");
}

export { Euler004 };
