const closedIsland = grid => {
  const rows = grid.length;
  if (!rows) return 0;
  const cols = grid[0].length;
  let count = 0;

  function markVisited(i, j) {
    grid[i][j] = -1;
    const dirs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ];
    for (const dir of dirs) {
      const x = i + dir[0];
      const y = j + dir[1];
      if (x > 0 && y > 0 && x < rows - 1 && y < cols - 1 && grid[x][y] === 0) {
        markVisited(x, y);
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
        if (grid[i][j] === 0) markVisited(i, j);
      }
    }
  }

  for (let i = 1; i < rows - 1; i++) {
    for (let j = 1; j < cols - 1; j++) {
      if (grid[i][j] === 0) {
        count++;
        markVisited(i, j);
      }
    }
  }

  return count;
};

console.log(
  closedIsland([
    [0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
    [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0]
  ])
);
