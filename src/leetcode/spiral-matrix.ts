function spiralOrder(matrix) {
  if (Math.floor(matrix.length / 2) === 0) {
    return matrix[0];
  }

  const result = [];
  const length =
    Math.ceil(matrix[0].length / 2) < Math.ceil(matrix.length / 2)
      ? Math.ceil(matrix[0].length / 2)
      : Math.ceil(matrix.length / 2);

  for (let i = 0; i < length; i++) {
    if (matrix.length - 1 !== i) {
      for (let j = i; j < matrix[0].length - i; j++) {
        result.push(matrix[i][j]);
      }
    }

    for (let j = i + 1; j < matrix.length - i - 1; j++) {
      result.push(matrix[j][matrix[0].length - i - 1]);
    }

    if (matrix.length - i !== i && matrix.length - i - 1 !== i) {
      for (let j = matrix[0].length - i; j > i; j--) {
        result.push(matrix[matrix.length - i - 1][j - 1]);
      }
    }

    if (matrix[0].length - i - 1 !== i) {
      for (let j = matrix.length - i - 2; j > i; j--) {
        result.push(matrix[j][i]);
      }
    }
  }
  return result;
}

const spiralMatrix0 = [
  [1, 2, 3],
  [5, 6, 7],
  [9, 10, 11]
];
const spiralMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];
const spiralMatrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
];
const spiralMatrix3 = [[6, 9, 7]];
const spiralMatrix4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
const spiralMatrix5 = [[7], [9], [6]];
const spiralMatrix6 = [[7, 2]];
const spiralMatrix7 = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]];
const spiralMatrix8 = [
  [1, 2],
  [3, 4]
];
const spiralMatrix9 = [
  [2, 5, 8],
  [4, 0, -1]
];

const spiralMatrix10 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
];
console.log(spiralOrder(spiralMatrix0));
console.log(spiralOrder(spiralMatrix));
console.log(spiralOrder(spiralMatrix2));
console.log(spiralOrder(spiralMatrix3));
console.log(spiralOrder(spiralMatrix4));
console.log(spiralOrder(spiralMatrix5));
console.log(spiralOrder(spiralMatrix6));
console.log(spiralOrder(spiralMatrix7));
console.log(spiralOrder(spiralMatrix8));
console.log(spiralOrder(spiralMatrix9));
console.log(spiralOrder(spiralMatrix10));
