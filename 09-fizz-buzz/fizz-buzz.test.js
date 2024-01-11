const fizzBuzz = require("./fizz-buzz");

test("Must show the numbers, fizz if the number is divisable to 3, buzz if it's to 5, fizzBuzz if it's to both", () => {
  expect(fizzBuzz([1, 2, 3, 4, 5])).toBe([1, 2, "fizz", 4, "buzz"]);
});
