const shortestPathBinaryMatrix = grid => {
  if (grid[0][0] === 1) return -1;
  const queue = [[0, 0, 0]];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [1, 1],
    [-1, -1],
    [-1, 1],
    [1, -1]
  ];
  const end = [grid.length - 1, grid[0].length - 1];
  const visited = {};
  visited[`0-0`] = true;

  let minPath = Infinity;
  while (queue.length > 0) {
    const [row, col, sum] = queue.shift();

    if (row === end[0] && col === end[1]) {
      minPath = Math.min(minPath, sum);
      continue;
    }

    for (const [x, y] of directions) {
      const newX = x + row;
      const newY = y + col;

      if (
        newX >= 0 &&
        newX <= grid.length - 1 &&
        newY >= 0 &&
        newY <= grid[0].length - 1
      ) {
        const str = `${newX}-${newY}`;
        if (!visited[str] && grid[newX][newY] === 0) {
          visited[str] = true;
          queue.push([newX, newY, sum + 1]);
        }
      }
    }
  }

  return minPath === Infinity ? -1 : minPath + 1;
};

let mat = [
  [0, 1, 1, 0, 0, 0],
  [0, 1, 0, 1, 1, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 0]
];
console.log(shortestPathBinaryMatrix(mat));
