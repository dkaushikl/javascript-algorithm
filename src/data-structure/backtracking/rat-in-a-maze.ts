const findPath = (m, n) => {
  const paths = [];

  const backtrack = (row, col, dp = {}, path = []) => {
    if (row >= n || col >= n || m[row][col] === 0) return;

    if (row === n - 1 && col === n - 1) {
      paths.push([...path]);
      return;
    }

    if (dp[row][col]) {
      console.log([row, col]);
      // return dp[row][col];
    }

    dp[row][col] = backtrack(row + 1, col, [...path, 'D']);
    dp[row][col] = backtrack(row, col + 1, [...path, 'R']);

    return dp[row][col];
  };

  backtrack(0, 0);
  return paths.length > 0 ? paths.map(x => x.join('')) : -1;
};

const pathMat = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1]
];
console.log(findPath(pathMat, 4));
