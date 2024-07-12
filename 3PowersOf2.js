// -----------------------------------------Description-------------------------------------------------------------------

// Write a function that accepts a number, and checks it can be represented as a sum of exactly 3 powers of 2. (n == 2**i + 2**j + 2**k, i, j, k >= 0)

// For example:
// three_powers(2)  # False
// three_powers(3)  # True, 3 = 2**0 + 2**0 + 2**0
// three_powers(5)  # True, 5 = 2**0 + 2**1 + 2**1
// three_powers(15)  # False

// Input
// 1 <= n <= 2 ** 512 - 1

// There are 100 performance tests in languages with bigints, and a huge amount in languages without.

// -----------------------------------------------------------------------------------------------------------------------

const threePowers = (n) => {
  // Define a function named threePowers that takes one argument 'n'.

  if (n <= 2n) {
    // Check if the value of 'n' is less than or equal to 2 (using BigInt notation '2n').
    // If 'n' is less than or equal to 2, return false immediately.
    return false;
  }

  let count = 0;
  // Initialize a variable 'count' to 0.
  // This will be used to count the number of 1 bits in the binary representation of 'n'.

  while (n > 0n) {
    // Loop as long as 'n' is greater than 0.

    let rem = n % 2n;
    // Calculate the remainder when 'n' is divided by 2 (using BigInt notation '2n').
    // This operation extracts the least significant bit of 'n'.

    if (rem === 1n) {
      // If the remainder is 1 (indicating the least significant bit is 1),
      // increment the 'count' by 1.
      count++;
    }

    n = n / 2n;
    // Perform integer division on 'n' by 2 (using BigInt notation '2n').
    // This effectively shifts 'n' one bit to the right in its binary representation.
  }

  return count <= 3;
  // Return true if 'count' is less than or equal to 3, otherwise return false.
  // This checks if the number of 1 bits in the binary representation of 'n' is 3 or fewer.
}



console.log('result',  threePowers(2))      //false
console.log('result',  threePowers(3n))     //true
console.log('result',  threePowers(5n))     //true
console.log('result',  threePowers(15n))    //false