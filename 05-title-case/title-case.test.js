const titleCase = require("./title-case");

test("This function must capitilize the first letter of each word", () => {
  expect(titleCase("Hello my friend and hi quick cuty brown fox")).toBe(
    "Hello My Friend And Hi Quick Cuty Brown Fox"
  );
});
