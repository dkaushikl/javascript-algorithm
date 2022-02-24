const minPathSum = (
  board,
  m = board.length - 1,
  n = board[0].length - 1,
  memo = {}
) => {
  if (m === 0 && n === 0) return board[m][n];

  if (m < 0 || n < 0) return Number.MAX_SAFE_INTEGER;

  const key = m + ',' + n;
  const result =
    Math.min(
      minPathSum(board, m - 1, n, memo),
      minPathSum(board, m, n - 1, memo)
    ) + board[m][n];
  memo[key] = result;
  return result;
};

// console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6]
  ])
);
