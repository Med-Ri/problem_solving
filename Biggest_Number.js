// ---------------------------Description---------------------------------------

// The task is to create a function called biggestNumber that takes an array of numbers as input and returns the largest number in the array.

// -----------------------------------------------------------------------------

//Solution 1 using (ES6)
const biggestNumber01 = (arr) => {
    return Math.max(...arr)
}

console.log('result_01', biggestNumber01([19,1,0,20,2,105,-255,30,106])) //result ==> 106



//solution 2 using js
const biggestNumber02 = (arr) => {
  // Initialize max to the first element of the array
  let max = arr[0];
  // Loop through the array starting from the second element
  for (let index = 1; index < arr.length; index++) {
    // Compare each element to the current max
    if (arr[index] > max) {
      // If the current element is greater, update max
      max = arr[index];
    }
  }
  // Return the maximum value found
  return max;
};

console.log('result_02', biggestNumber02([19,1,0,20,2,105,-255,30,106])) //result ==> 106
