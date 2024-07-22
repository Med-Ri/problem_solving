// ------------------------------------------Description----------------------------------------------------------

// Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

// For example, the transpose of:
// | 1 2 3 |
// | 4 5 6 |
// is
// | 1 4 |
// | 2 5 |
// | 3 6 |

// The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.

// ---------------------------------------------------------------------------------------------------------------

const transpose = (matrix) => {
  // Determine the dimensions of the transposed matrix
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Create a new matrix with the transposed dimensions
  const transposed = new Array(numCols);
  for (let i = 0; i < numCols; i++) {
    transposed[i] = new Array(numRows);
  }

  // Populate the transposed matrix
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      transposed[j][i] = matrix[i][j];
    }
  }

  return transposed;
};

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
];

const matrix2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const matrix3 = [[1]];

console.log(transpose(matrix1)); // Expected output: [[1, 4], [2, 5], [3, 6]]
console.log(transpose(matrix2)); // Expected output: [[1, 3, 5], [2, 4, 6]]
console.log(transpose(matrix3)); // Expected output: [[1]]
