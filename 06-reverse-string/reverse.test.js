const reverseString = require("./reverse");

test("This function must reverse the string", () => {
  expect(reverseString("hello")).toBe("o,l,l,e,h");
});
