const removeDuplicates = require("./remove-duplicates");

test("Removing duplicates from an array", () => {
  expect(removeDuplicates([1, 2, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(removeDuplicates(["apple", "banana", "banana", "orange"])).toEqual([
    "apple",
    "banana",
    "orange",
  ]);
  expect(removeDuplicates([true, true, false, false])).toEqual([true, false]);
});
