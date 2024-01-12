const removeDuplicates = require("./remove-duplicates");

test("Removing duplicates from an array", () => {
  expect(
    removeDuplicates(["apple", "banana", "orange", "banana", "kiwi"]).toEqual([
      "apple",
      "banana",
      "orange",
      "kiwi",
    ]);
    expect(removeDuplicates([true, true, false, true, false])).toEqual([
      true,
      false,
    ]);
  );
});
