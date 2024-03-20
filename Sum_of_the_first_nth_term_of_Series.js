// -------------------------------------Description-----------------------------------------------------

// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

// You will need to figure out the rule of the series to complete this.

// Rules
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// -----------------------------------------------------------------------------------------------------

const SeriesSum = (n) => {
  if (n === 0) {
    return "0.00";
  } else {
    let sum = 0;
    let denominator = 1;

    for (let i = 0; i < n; i++) {
      sum += 1 / denominator;
      denominator += 3;
    }

    return sum.toFixed(2);
  }
}




// Test cases
console.log(SeriesSum(1));  // Output: "1.00"
console.log(SeriesSum(2));  // Output: "1.25"
console.log(SeriesSum(5));  // Output: "1.57"


