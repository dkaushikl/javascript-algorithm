const searchMatrix = (matrix: number[][], target: number) => {
  while (true) {
    let halfMatrix = Math.floor(matrix.length / 2);
    console.log(`halfMatrix`, halfMatrix);

    if (matrix[halfMatrix][0] > target) {
      matrix = matrix[halfMatrix - 1];
    }

    break;
  }
};

searchMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
  ],
  3
);
