// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

// Example
// [[1, 2] 2 4 3 1
// [3, 4]]

function rotate2x2MatrixClockWise90(n, matrix) {
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 1; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i + 1][j];
      matrix[i + 1][j] = matrix[i + 1][j + 1];
      matrix[i + 1][j + 1] = matrix[i][j + 1];
      matrix[i][j + 1] = temp;
    }
  }
  console.log(matrix);
}

function rotate2x2MatrixAntiClockWise90(n, matrix) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][j + 1];
      matrix[i][j + 1] = matrix[i + 1][j + 1];
      matrix[i + 1][j + 1] = matrix[i + 1][j];
      matrix[i + 1][j] = temp;
    }
  }
  console.log(matrix);
}

function rotateMatrix4x4(n, matrix) {
  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - i - 1; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - i - 1][j];

      matrix[n - i - 1][j] = matrix[n - i - 1][n - j - 1];

      matrix[n - i - 1][n - j - 1] = matrix[i][n - j - 1];

      matrix[i][n - j - 1] = temp;
    }
  }
  console.log(matrix);
}

function rotateMatrix3x3(n, matrix) {
  for (let i = 0; i < 1; i++) {
    for (let j = i; j < 1; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[n - i - 1][j];
      matrix[n - i - 1][j] = temp;
    }

    for (let j = i + 1; j < 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - i - 2][n - j];
      matrix[n - i - 2][n - j] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[n - i - 2][j - 1];
      matrix[n - i - 2][j - 1] = temp;
    }
  }
  console.log(matrix);
}

function rotate6x6eMatrixBy90Degree(n, matrix) {
  //   for (let i = 0; i < array.length; i++) {
  //     const element = array[i];
  //   }
}

// https://www.geeksforgeeks.org/rotate-matrix-right-k-times/?ref=rp
function rotateMatrixKTime(
  n = 3,
  m = 3,
  k = 2,
  matrix = [
    [12, 23, 34],
    [45, 56, 67],
    [78, 89, 91],
  ],
) {
  const index = 0;

  for (let i = 0; i < k; i++) {
    for (let j = 0; j < 1; j++) {
      let temp = matrix[index][j];
      matrix[index][j] = matrix[index][j + 2];
      matrix[index][j + 2] = matrix[index][j + 1];
      matrix[index][j + 1] = temp;

      let temp1 = matrix[index + 1][j];
      matrix[index + 1][j] = matrix[index + 1][j + 2];
      matrix[index + 1][j + 2] = matrix[index + 1][j + 1];
      matrix[index + 1][j + 1] = temp1;

      const temp2 = matrix[index + 2][j];
      matrix[index + 2][j] = matrix[index + 2][j + 2];
      matrix[index + 2][j + 2] = matrix[index + 2][j + 1];
      matrix[index + 2][j + 1] = temp2;
    }
  }

  console.log(matrix);
}

function generateMatrix(arr, n) {
  let result = [];
  let tempArr = [];

  for (let i = 1; i <= arr.length; i++) {
    tempArr.push(arr[i - 1]);

    if (i % n === 0) {
      result.push(tempArr);
      tempArr = [];
    }
  }

  console.log(result);
}

function makeArrayPerfact(n, matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      arr.push(matrix[i][j]);
    }
  }

  arr = arr.sort((a, b) => a - b);
  generateMatrix(arr, n);
}

function main() {
  //   let matrix = [
  //     [3, 4, 5, 1, 5, 9, 5],
  //     [6, 9, 8, 7, 2, 5, 2],
  //     [1, 5, 9, 7, 5, 3, 2],
  //     [4, 7, 8, 9, 3, 5, 2],
  //     [4, 5, 2, 9, 5, 6, 2],
  //     [4, 5, 7, 2, 9, 8, 3],
  //   ];

  let matrix = [
    [5, 4, 7],
    [1, 2, 3],
    [13, 14, 15],
  ];

  makeArrayPerfact(matrix[0].length, matrix);
}

main();
