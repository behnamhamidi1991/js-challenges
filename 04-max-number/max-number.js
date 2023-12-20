// ---------------- 001 The simple one line solution
// const maxNumber = (arr) => {
//   return Math.max(...arr);
// };

// ---------------- 002 Solution with for loop
const maxNumber = (arr) => {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

module.exports = maxNumber;
