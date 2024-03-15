const findNumber = require('./find-number');

test('Find the missung number', () => {
  expect(findNumber([1, 2, 3, 4, 6, 7, 8, 9, 10])).toBe(5);
  expect(findNumber([1, 2, 4, 5])).toBe(3);
});
