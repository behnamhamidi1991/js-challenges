const pushArray = require("./push");

test("Must add an item to the end", () => {
  expect(pushArray([1, 2, 3], 4)).toStrictEqual([1, 2, 3, 4]);
});
