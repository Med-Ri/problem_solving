// ----------------------------------description--------------------------------

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// -----------------------------------------------------------------------------

const moveZeros = (arr) => {
  // Initialize a variable to keep track of the position to insert zeros
  let insertPosition = 0;

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // If the current element is not zero, move it to the insert position and increment the insert position
    if (arr[i] !== 0) {
      arr[insertPosition] = arr[i];
      insertPosition++;
    }
  }

  // Fill the remaining positions with zeros
  for (let i = insertPosition; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
};



console.log('result ==>>', moveZeros([false,1,0,1,2,0,1,3,"a"])) //result ==>> [false,1,1,2,1,3,'a',0, 0]
console.log('result ==>>', moveZeros(['0',1,0,true,2,0,1,3,"a"])) //result ==>> result ==>> ['0', 1, true, 2,1,3,'a',0,0]