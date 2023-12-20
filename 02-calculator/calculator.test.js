const calculator = require("./calculator");

test("This function must do four main arithmatic operations", () => {
  // Addition
  expect(calculator(8, 2, "+")).toBe(10);

  // Subtraction
  expect(calculator(8, 2, "-")).toBe(6);

  // Multiplication
  expect(calculator(8, 2, "*")).toBe(16);

  // Division
  expect(calculator(8, 2, "/")).toBe(4);
});
