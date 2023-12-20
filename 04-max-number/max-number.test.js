const maxNumber = require("./max-number");

test("This function must get an array of numbers and return the highest one", () => {
  expect(maxNumber([2, 5, 3, 8])).toBe(8);
});
