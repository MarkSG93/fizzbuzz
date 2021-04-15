//1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...

import { fizzBuzz } from './fizzbuzz';

describe('FizzBuzz', () => {
  describe.each([
    [3, 'fizz'],
    [5, 'buzz']
  ])('when number is divisible by %d', (inputValue, expected) => {
    it(`should return ${expected}`, () => {
      const result = fizzBuzz(inputValue);
      expect(result).toBe(expected);
    });
  });
});