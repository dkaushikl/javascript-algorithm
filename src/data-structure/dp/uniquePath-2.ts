const uniquePathsWithObstacles = (
  board,
  m = board.length - 1,
  n = board[0].length - 1,
  memo = {}
) => {
  if (m < 0 || n < 0 || board[m][n] === 1) return 0;
  if (m === 0 && n === 0) return 1;

  const key = m + ',' + n;
  if (memo[key]) return memo[key];

  return (memo[key] =
    uniquePathsWithObstacles(board, m - 1, n, memo) +
    uniquePathsWithObstacles(board, m, n - 1, memo));
};

// const uniquePathMatrix = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
// console.log(uniquePathsWithObstacles(uniquePathMatrix, uniquePathMatrix.length - 1, uniquePathMatrix[0].length - 1));

// const uniquePathMatrix2 = [[0, 1], [0, 0]]
// console.log(uniquePathsWithObstacles(uniquePathMatrix2, uniquePathMatrix2.length - 1, uniquePathMatrix2[0].length - 1));

const uniquePathMatrix3 = [[0, 1]];
console.log(
  uniquePathsWithObstacles(
    uniquePathMatrix3,
    uniquePathMatrix3.length - 1,
    uniquePathMatrix3[0].length - 1
  )
);

// const uniquePathMatrix4 = [[0, 0], [0, 1]];
// console.log(uniquePathsWithObstacles(uniquePathMatrix4, uniquePathMatrix4.length - 1, uniquePathMatrix4[0].length - 1));

// const uniquePathMatrix5 = [[1]];
// console.log(uniquePathsWithObstacles(uniquePathMatrix5, uniquePathMatrix5.length - 1, uniquePathMatrix5[0].length - 1));
