const countVowels = require("./count-vowels");

test("Must counts the number of vowels", () => {
  expect(countVowels("Hello World")).toBe(3);
});
