// --------------------------------------------------------Description---------------------------------------------------------------------------------

// John wants to give a total bonus of $851 to his three employees taking fairly as possible into account their number of days of absence during the period under consideration. Employee A was absent 18 days, B 15 days, and C 12 days.
// The more absences, the lower the bonus ...
// How much should each employee receive? John thinks A should receive $230, B $276, C $345 since 230 * 18 = 276 * 15 = 345 * 12 and 230 + 276 + 345 = 851.

// Task:
// Given an array arr (numbers of days of absence for each employee) and a number s (total bonus) the function bonus(arr, s) will follow John's way and return an array of the fair bonuses of all employees in the same order as their numbers of days of absences.
// s and all elements of arr are positive integers.

// Examples:
// bonus([18, 15, 12], 851) -> [230, 276, 345]
// bonus([30, 27, 8, 14, 7], 34067) -> [2772, 3080, 10395, 5940, 11880]

// Notes
// See Example Test Cases for more examples.
// Please ask before translating.
// In some tests the number of elements of arr can be big.

// ----------------------------------------------------------------------------------------------------------------------------------------------------

const bonus = (arr, s) => {
  let min = Math.min(...arr);
  let x = arr.map((el) => min / el);
  let sumOfX = x.reduce((acc, currentValue) => acc + currentValue);
  return x.map((el) => Math.round((el * s) / sumOfX));
};




// Test cases
const testCases = [
    { arr: [18, 15, 12], s: 851, expected: [230, 276, 345] },
    { arr: [30, 27, 8, 14, 7], s: 34067, expected: [2772, 3080, 10395, 5940, 11880] },
    { arr: [1, 2, 3], s: 6, expected: [3, 2, 1] }, // Example test case
  ];
  
  testCases.forEach(({ arr, s, expected }, index) => {
    const result = bonus(arr, s);
    console.log(`Test Case ${index + 1}: `, result);
    console.assert(JSON.stringify(result) === JSON.stringify(expected), `Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(result)}`);
  });