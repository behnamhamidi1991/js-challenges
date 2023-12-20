// THE FIRST SOLUTION: USING FOR LOOP
// function countOccurences(str, char) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }

//   return count;
// }

// THE SECOND SOLUTION: USING SLICE
const countOccurences = (str, char) => str.split(char).length - 1;
// We wrote the code above in only one simple line using "SPLIT".

module.exports = countOccurences;
