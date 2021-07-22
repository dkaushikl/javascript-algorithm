/* Question no:21  Count Square Submatrices with All Ones (May 21st 2020)

Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

Input: matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
Output: 15
Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.

Input: matrix = 
[
  [1,0,1],
  [1,1,0],
  [1,1,0]
]
Output: 7
Explanation: 
There are 6 squares of side 1.  
There is 1 square of side 2. 
Total number of squares = 6 + 1 = 7.

*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[0].length; ++j) {
      if (matrix[i][j] === 0) continue;
      if (i > 0 && j > 0) {
        matrix[i][j] += Math.min(
          matrix[i - 1][j],
          matrix[i][j - 1],
          matrix[i - 1][j - 1]
        );
      }
      count += matrix[i][j];
    }
  }
  return count;
};