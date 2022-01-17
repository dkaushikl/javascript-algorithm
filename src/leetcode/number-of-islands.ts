const numIslands = function(grid) {
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

const grid = [['0']];
console.log(numIslands(grid));
