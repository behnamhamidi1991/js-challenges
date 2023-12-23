const calculator = require("./calculator");

test("The function must do 4 main arithmatic operaton", () => {
  expect(calculator(4, 4, "+")).toBe(8);
  expect(calculator(4, 4, "-")).toBe(0);
  expect(calculator(4, 4, "/")).toBe(1);
  expect(calculator(4, 4, "*")).toBe(16);
});
