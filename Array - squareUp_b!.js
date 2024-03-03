// -------------------------------Description---------------------------------
// This is a question from codingbat

// Given an integer n greater than or equal to 0, create and return an array with the following pattern:

// squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
// squareUp(2) => [0, 1, 2, 1]
// squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
// 0 <= n <= 1000.
// ---------------------------------------------------------------------------


const squareUp = (n) => {
    let result = [];
    for (let i = n; i > 0; i--) {
      for (let j = 1; j <= n; j++) {
        if (j <= i) {
          result.unshift(j);
        } else {
          result.unshift(0);
        }
      }
    }
    return result;
  }