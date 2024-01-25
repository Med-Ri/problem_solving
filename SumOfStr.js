/* description */
/* Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3' */

/* ----------------------------------------------------------- */



function sumStrings(a,b) { 
    // Convert strings to BigInts to handle large integers
  let num1 = BigInt(a);
  let num2 = BigInt(b);

  // Add the two BigInts
  let sum = num1 + num2;

  // Convert sum BigInt back to string
  return sum.toString();
}

console.log(sumStrings('01215545465656561','3555454554656544')) 
 