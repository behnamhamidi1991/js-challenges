const removeDuplicates = require("./remove-duplicates");

const result = [1, 1, 1];

test("Must removes any repeating index in an array", () => {
  expect(result).toBe([1]);
});
