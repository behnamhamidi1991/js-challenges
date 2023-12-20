const countOccurences = require("./count-occurrences");

test("This function must show how many of a specific character in a string are there, it must also diffrenciate between capilizied and lowercase characters", () => {
  expect(countOccurences("Hello World", "l")).toBe(3);
});
