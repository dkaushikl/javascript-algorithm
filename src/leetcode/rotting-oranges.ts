const orangesRotting = grid => {
  const queue = [];
  const directions = [
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, 0]
  ];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== 2) continue;
      queue.push([i, j, 0]);
    }
  }

  let maxLevel = 0;
  while (queue.length > 0) {
    const [row, col, level] = queue.shift();
    maxLevel = Math.max(level, maxLevel);

    for (const neighbor of directions) {
      const newX = row + neighbor[0];
      const newY = col + neighbor[1];

      if (
        newX >= 0 &&
        newX <= grid.length - 1 &&
        newY >= 0 &&
        newY <= grid[0].length - 1 &&
        grid[newX][newY] === 1
      ) {
        grid[newX][newY] = 2;
        queue.push([newX, newY, level + 1]);
      }
    }
  }

  for (const item of grid) if (item.includes(1)) return -1;

  return maxLevel;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 1],
    [0, 1, 2]
  ])
);
console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
  ])
);
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1]
  ])
);
console.log(orangesRotting([[0, 2]]));
