const removeDuplicates = require("./remove-duplicates");

test("Must removes any repeating index in an array", () => {
  expect(removeDuplicates([1, 1, 1])).toBe([1]);
});
