const numEnclaves = grid => {
  const rows = grid.length;
  const cols = grid[0].length;
  if (rows === 1 && cols === 1) {
    return grid[0][0] === '1' ? 1 : 0;
  }

  const dfs = (m, n) => {
    if (m < 0 || n < 0 || m > rows - 1 || n > cols - 1 || grid[m][n] === '0')
      return;
    else grid[m][n] = '0';

    dfs(m + 1, n);
    dfs(m - 1, n);
    dfs(m, n + 1);
    dfs(m, n - 1);
  };

  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
};

console.log(
  numEnclaves([
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 1]
  ])
);
console.log(
  numEnclaves([
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
  ])
);
console.log(
  numEnclaves([
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
  ])
);

const numEnclaves2 = grid => {
  const rows = grid.length;
  const cols = grid[0].length;

  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1) return;

    if (grid[i][j] !== 1) return;
    grid[i][j] = 2;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || j === 0 || i === rows - 1 || j === cols - 1) {
        if (grid[i][j] === 1) {
          dfs(i, j);
        }
      }
    }
  }

  let count = 0;
  for (let i = 1; i < rows - 1; i++) {
    for (let j = 1; j < cols - 1; j++) {
      if (grid[i][j] === 1) {
        count++;
      }
    }
  }
  return count;
};

console.log(
  numEnclaves2([
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
  ])
);
console.log(
  numEnclaves2([
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
  ])
);
