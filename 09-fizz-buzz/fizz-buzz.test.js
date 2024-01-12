const fizzBuzz = require("./fizz-buzz");

test("Msut function as famous fizzBuzz challenge", () => {
  expect(fizzBuzz(5)).toEqual([1, 2, "fizz", 4, "buzz"]);
});
