function fizzBuzz(num) {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("fizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("fizz");
    }
  }
}

module.exports = fizzBuzz;
