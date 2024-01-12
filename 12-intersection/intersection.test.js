const intersectionArr = require("./intersection");

test("Must show the common elements of to arrays", () => {
  expect(intersectionArr([1, 4, 6, 8, 12], [1, 2, 4, 6, 15, 16])).toEqual([
    1, 4, 6,
  ]);
});
