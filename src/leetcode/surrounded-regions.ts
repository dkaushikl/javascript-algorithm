const solve = board => {
  const m = board.length;
  const n = board[0].length;
  const visited = [...Array(m)].map(() => Array(n).fill(false));

  const go = (a, b) => {
    if (
      a < 0 ||
      b < 0 ||
      a >= m ||
      b >= n ||
      board[a][b] === 'X' ||
      visited[a][b]
    )
      return null;

    visited[a][b] = true;
    go(a + 1, b);
    go(a - 1, b);
    go(a, b + 1);
    go(a, b - 1);
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== 0 && i !== m - 1 && j !== 0 && j !== n - 1) continue;
      go(i, j);
    }
  }
};

console.log(
  solve([
    ['O', 'X', 'X', 'O', 'X'],
    ['X', 'O', 'O', 'X', 'O'],
    ['X', 'O', 'X', 'O', 'X'],
    ['O', 'X', 'O', 'O', 'O'],
    ['X', 'X', 'O', 'X', 'O']
  ])
);

const solve2 = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dfs = (i, j, sign) => {
    if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1) return;
    if (grid[i][j] !== 'O') return;
    grid[i][j] = sign;
    dfs(i + 1, j, sign);
    dfs(i - 1, j, sign);
    dfs(i, j + 1, sign);
    dfs(i, j - 1, sign);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || j === 0 || i === rows - 1 || j === cols - 1) {
        if (grid[i][j] === 'O') {
          dfs(i, j, 'Y');
        }
      }
    }
  }

  for (let i = 1; i < rows - 1; i++) {
    for (let j = 1; j < cols - 1; j++) {
      if (grid[i][j] === 'O') {
        dfs(i, j, 'X');
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 'Y') grid[i][j] = 'O';
    }
  }
  return grid;
};

console.log(
  solve2([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X']
  ])
);

console.log(
  solve2([
    ['O', 'X', 'X', 'O', 'X'],
    ['X', 'O', 'O', 'X', 'O'],
    ['X', 'O', 'X', 'O', 'X'],
    ['O', 'X', 'O', 'O', 'O'],
    ['X', 'X', 'O', 'X', 'O']
  ])
);
