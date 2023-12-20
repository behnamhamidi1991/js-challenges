const isPalindrome = require("./palindrome");

test("If the reverse string matches the main form, return true, else return false", () => {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("madam")).toBe(true);
  expect(isPalindrome("hospital")).toBe(false);
});
