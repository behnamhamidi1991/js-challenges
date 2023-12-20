const helloWorld = require("./helloworld");

test("The function must return this string: Hello World!", () => {
  expect(helloWorld()).toBe("Hello World");
});
