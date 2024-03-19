// ---------------------------Description------------------------------------------

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//   10 -->   250  ( 10 * 5²)
//   200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//   -3 -->   -15  ( -3 * 5¹)

// --------------------------------------------------------------------------------

const multiplyByDigits = (number) => {
  if (number === 0) return 0; // Special case for 0
  const sign = Math.sign(number); // Save the sign
  number = Math.abs(number); // Make number positive for calculation
  const power = Math.pow(5, Math.floor(Math.log10(number)) + 1); // Calculate 5 raised to the number of digits
  return sign * number * power; // Multiply by the power and restore the sign
};

// Test cases
console.log(multiplyByDigits(3)); // Output: 15
console.log(multiplyByDigits(10)); // Output: 250
console.log(multiplyByDigits(200)); // Output: 25000
console.log(multiplyByDigits(0)); // Output: 0
console.log(multiplyByDigits(-3)); // Output: -15
