const diagonalDifference = arr => {
  let leftToRight = 0;
  let RightToLeft = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) {
        leftToRight += arr[i][j];
      }

      if (i + 1 + j === arr.length) {
        RightToLeft += arr[i][j];
      }
    }
  }

  return Math.abs(leftToRight - RightToLeft);
};

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]);
