// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

// Example
// [[1, 2] 2 4 3 1
// [3, 4]]

const rotateMatrix = (matrix: number[][]) => {
  const n = matrix.length;
  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      const mainValue = matrix[n - i - 1][j];
      matrix[n - i - 1][j] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = matrix[i][j];
      matrix[i][j] = mainValue;
    }
  }
  console.log(matrix);
};

let arr = [
  [13, 9, 5, 1],
  [14, 10, 6, 2],
  [15, 11, 7, 3],
  [16, 12, 8, 4]
];

let result = [
  [13, 9, 5, 1],
  [14, 10, 6, 2],
  [15, 11, 7, 3],
  [16, 12, 8, 4]
];

rotateMatrix(arr);
