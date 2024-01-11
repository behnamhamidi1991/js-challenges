function fizzBuzz(i) {
  for (i = 1; 1 <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      return "fizzBuzz";
    } else if (i % 3 === 0) {
      return "fizz";
    } else if (i % 5 === 0) {
      return "buzz";
    }
  }
}

module.exports = fizzBuzz;
