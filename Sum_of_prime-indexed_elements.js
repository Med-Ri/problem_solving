// ---------------------------------description-----------------------------------
// In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

// The first element of the array is at index 0.

// Good luck!

// -------------------------------------------------------------------------------

const total = (arr) =>  {
  let primeSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let isPrime = true;
    if (i <= 1) {
      isPrime = false;
    } else {
      for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      primeSum += arr[i];
    }
  }
  return primeSum;
}


console.log('result', total([0,1,2,3,4,5,6,7,8,9,10])) //17