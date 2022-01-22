const numIslands = grid => {
  let totalLand = 0;

  const traverse = (i, j) => {
    if (grid[i][j] === '1') {
      grid[i][j] = '2';

      if (i > 0) {
        traverse(i - 1, j);
      }

      if (j < grid[0].length - 1) {
        traverse(i, j + 1);
      }

      if (j > 0) {
        traverse(i, j - 1);
      }

      if (i < grid.length - 1) {
        traverse(i + 1, j);
      }
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        totalLand++;
        traverse(i, j);
      }
    }
  }

  return totalLand;
};

console.log(numIslands([['0']]));

const numIslands2 = (grid: string | any[]) => {
  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0] // up
  ];
  const M = grid.length;
  const N = grid[0].length;
  const dfs = (i, j) => {
    if (i < 0 || i >= M || j < 0 || j >= N || grid[i][j] === '0') return;
    if (grid[i][j] === '1') grid[i][j] = '0';

    for (const item of directions) {
      dfs(item[0] + i, item[1] + j);
    }
  };

  let totalLand = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === '1') {
        totalLand++;
        dfs(i, j);
      }
    }
  }

  return totalLand;
};

console.log(
  numIslands2([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ])
);
