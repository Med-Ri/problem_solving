// -----------------------------------------------Description-----------------------------------------------------------

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.



// ---------------------------------------------------------------------------------------------------------------------



const findUniq = (arr) => {
    // Find the unique number by filtering numbers that occur only once
    return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num));
}


// Example usage:
console.log(findUniq([1, 1, 1, 2, 1, 1])); // Output: 2
console.log(findUniq([0, 0, 0.55, 0, 0])); // Output: 0.55