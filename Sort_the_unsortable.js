// ----------------------------------------Description----------------------------------------------

// In this challenge you will be given an array similar to the following:
// [[3], 4, [2], [5], 1, 6]
// In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:
// [1, [2], [3], 4, [5], 6]

// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

// Examples:
// sortIt([4, 1, 3]) ➞ [1, 3, 4]
// sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]
// sortIt([4, [1], 3]) ➞ [[1], 3, 4]
// sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]
// sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]

// Notes
// To reiterate, elements of the array will be either integers or arrays with a single integer.

// ---------------------------------------------------------------------------------------------------

const sortIt = (arr) => {
  return arr.sort((a, b) => {
    const valA = Array.isArray(a) ? a[0] : a;
    const valB = Array.isArray(b) ? b[0] : b;
    return valA - valB;
  });
}



// Examples
console.log(sortIt([4, 1, 3])); // ➞ [1, 3, 4]
console.log(sortIt([[4], [1], [3]])); // ➞ [[1], [3], [4]]
console.log(sortIt([4, [1], 3])); // ➞ [[1], 3, 4]
console.log(sortIt([[4], 1, [3]])); // ➞ [1, [3], [4]]
console.log(sortIt([[3], 4, [2], [5], 1, 6])); // ➞ [1, [2], [3], 4, [5], 6]
console.log(sortIt([[-3], 14, [202], [55], 1, 16])); // ➞ [ [ -3 ], 1, 14, 16, [ 55 ], [ 202 ] ]