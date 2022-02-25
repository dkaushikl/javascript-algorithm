const floodFill = (image, sr, sc, newColor) => {
  if (image.length <= 0) return image;
  if (image.length >= 1 && image[1].length <= 0) return image;

  const cloneMatrix = JSON.parse(JSON.stringify(image));
  const M = image.length;
  const N = image[0].length;

  // down, up, right, left
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  const dfs = (r, c, replaceColor, newColor, visited) => {
    if (r < 0 || r > M - 1 || c < 0 || c > N - 1) return;

    if (visited[`${r}-${c}`]) return;
    visited[`${r}-${c}`] = true;

    if (cloneMatrix[r][c] === replaceColor) {
      image[r][c] = newColor;

      for (const [row, col] of directions) {
        dfs(r + row, c + col, replaceColor, newColor, visited);
      }
    }
  };

  const visited = {};
  dfs(sr, sc, image[sr][sc], newColor, visited);

  return image;
};

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0]
    ],
    0,
    0,
    2
  )
);

const floodFill2 = (image, sr, sc, newColor) => {
  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0] // up
  ];
  const dfs = (i, j, currColor) => {
    if (image[i][j] !== currColor) return;
    if (image[i][j] === newColor) return;

    image[i][j] = newColor;

    for (const item of directions) {
      if (
        item[0] + i < 0 ||
        item[0] + i > image.length - 1 ||
        item[1] + j < 0 ||
        item[1] + j > image[0].length - 1
      )
        continue;

      dfs(item[0] + i, item[1] + j, currColor);
    }
  };

  dfs(sr, sc, image[sr][sc]);
  return image;
};
console.log(
  floodFill2(
    [
      [0, 0, 0],
      [0, 1, 1]
    ],
    1,
    1,
    1
  )
);
console.log(
  floodFill2(
    [
      [0, 0, 0],
      [0, 0, 0]
    ],
    0,
    0,
    2
  )
);
console.log(
  floodFill2(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1]
    ],
    1,
    1,
    2
  )
);
