import { Euler001 } from "../src/euler-001";
import { Euler002 } from "../src/euler-002";
import { Euler003 } from "../src/euler-003";
import { Euler004 } from "../src/euler-004";
import { Euler005 } from "../src/euler-005";

describe("the sum of multiples of 3 or 5 below n", () => {
  test.each`
    input    | expectedResult
    ${1000}  | ${233168}
    ${49}    | ${543}
    ${8456}  | ${16687353}
    ${19564} | ${89301183}
  `("$input should return $expectedResult", ({ input, expectedResult }) => {
    expect(Euler001(input)).toBe(expectedResult);
  });
});

describe("the sum of even Fibonacci numbers below n", () => {
  test.each`
    input      | expectedResult
    ${8}       | ${10}
    ${10}      | ${10}
    ${34}      | ${44}
    ${60}      | ${44}
    ${1000}    | ${798}
    ${100000}  | ${60696}
    ${4000000} | ${4613732}
  `("$input should return $expectedResult", ({ input, expectedResult }) => {
    expect(Euler002(input)).toBe(expectedResult);
  });
});

describe("the largest prime factor of n", () => {
  test.each`
    input           | expectedResult
    ${2}            | ${2}
    ${3}            | ${3}
    ${5}            | ${5}
    ${7}            | ${7}
    ${8}            | ${2}
    ${13195}        | ${29}
    ${600851475143} | ${6857}
  `("$input should return $expectedResult", ({ input, expectedResult }) => {
    expect(Euler003(input)).toBe(expectedResult);
  });
});

describe("the largest palindrome made from the product of two n-digit numbers", () => {
  test.each`
    input | expectedResult
    ${2}  | ${9009}
    ${3}  | ${906609}
  `("$input should return $expectedResult", ({ input, expectedResult }) => {
    expect(Euler004(input)).toBe(expectedResult);
  });
});

describe("smallest positive number that is evenly divisible by all of the numbers from 1 to n", () => {
  test.each`
    input | expectedResult
    ${5}  | ${60}
    ${7}  | ${420}
    ${10} | ${2520}
    ${13} | ${360360}
    ${20} | ${232792560}
  `("$input should return $expectedResult", ({ input, expectedResult }) => {
    expect(Euler005(input)).toBe(expectedResult);
  });
});
