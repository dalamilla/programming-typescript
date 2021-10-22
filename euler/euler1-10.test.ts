import { Euler001 } from "./euler-001";
import { Euler002 } from "./euler-002";

describe('the sum of multiples of 3 or 5 below n', () => {
  test.each`
    input    | expectedResult
    ${1000}  | ${233168}
    ${49}    | ${543}
    ${8456}  | ${16687353}
    ${19564} | ${89301183}
  `('$input should return $expectedResult', ({ input, expectedResult }) => {
    expect(Euler001(input)).toBe(expectedResult);
  })
});

describe('the sum of even Fibonacci numbers below n', () => {
  test.each`
    input     | expectedResult
    ${8}      | ${10}
    ${10}     | ${10}
    ${34}     | ${44}
    ${60}     | ${44}
    ${1000}   | ${798}
    ${100000} | ${60696}
    ${4000000}| ${4613732}
  `('$input should return $expectedResult', ({ input, expectedResult }) => {
    expect(Euler002(input)).toBe(expectedResult);
  })
});
