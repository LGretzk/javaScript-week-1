
const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('returns Fizz when the input is 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });

  it('returns Buzz when the input is 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });

  it('returns 8 when the input is 8', () => {
    expect(fizzbuzz(8)).toBe(8);
  });

  it('returns FizzBuzz when the input is 15', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });

  it('returns 18 when the input is 18', () => {
    expect(fizzbuzz(18)).toBe('Fizz');
  });

  it('returns 20 when the input is 20', () => {
    expect(fizzbuzz(20)).toBe('Buzz');
  });
});