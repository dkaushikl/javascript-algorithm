const maxAreaOfIsland = grid => {
  const dfs = (i, j, sum) => {
    if (
      i < 0 ||
      i > grid.length - 1 ||
      j < 0 ||
      j > grid[0].length - 1 ||
      grid[i][j] !== 1
    )
      return 0;

    grid[i][j] = 2;

    let k = 0;
    if (i <= grid.length - 1) k += 1 + dfs(i + 1, j, sum + 1);

    if (i > 0) k += dfs(i - 1, j, sum + 1);

    if (j > 0) k += dfs(i, j - 1, sum + 1);

    if (j <= grid[0].length - 1) k += dfs(i, j + 1, sum + 1);

    return k;
  };

  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, dfs(i, j, 0));
      }
    }
  }

  return max;
};

// let grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1]
];
console.log(maxAreaOfIsland(grid));
