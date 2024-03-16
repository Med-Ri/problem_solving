// --------------------------------Description-----------------------------------------
// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
// ------------------------------------------------------------------------------------

const spacey = (array) => {
  let result = [];
  let accumulatedWord = "";
  for (let word of array) {
    accumulatedWord += word.replace(/\s/g, "");
    result.push(accumulatedWord);
  }
  return result;
};




let inputArray1 = ['kevin', 'has', 'no', 'space'];
let outputArray1 = spacey(inputArray1);
console.log('result', outputArray1) // => result [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace' ]

// --------------------------------------------------

let inputArray2 = ['this', 'cheese', 'has', 'no', 'holes'];
let outputArray2 = spacey(inputArray2);
console.log(outputArray2); // => ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']