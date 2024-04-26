// ----------------------------Description------------------------------------

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.


// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Example 2:
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 
// Constraints:
// n == matrix.length == matrix[i].length
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000

// ---------------------------------------------------------------------------


var rotate = function(matrix) {
    const n = matrix.length;
   // Iterate through each layer
   for (let layer = 0; layer < Math.floor(n / 2); layer++) {
       const first = layer;
       const last = n - 1 - layer;
       // Iterate through each element in the layer
       for (let i = first; i < last; i++) {
           // Save the top element
           const top = matrix[first][i];

           // Move left to top
           matrix[first][i] = matrix[last - (i - first)][first];

           // Move bottom to left
           matrix[last - (i - first)][first] = matrix[last][last - (i - first)];

           // Move right to bottom
           matrix[last][last - (i - first)] = matrix[i][last];

           // Move top to right
           matrix[i][last] = top;
       }
   }
};