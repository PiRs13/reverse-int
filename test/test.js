const reverseNumber = require('../src/index');

test('reverseNumber function exists', () => {
  expect(reverseNumber).toBeDefined();
});

test('reverseNumber correctly reverses positive numbers', () => {
  expect(reverseNumber(123)).toBe(321);
  expect(reverseNumber(456789)).toBe(987654);
});

test('reverseNumber correctly reverses negative numbers', () => {
  expect(reverseNumber(-123)).toBe(-321);
  expect(reverseNumber(-456789)).toBe(-987654);
});

test('reverseNumber handles numbers ending in zero', () => {
  expect(reverseNumber(1200)).toBe(21);
  expect(reverseNumber(-1200)).toBe(-21);
});