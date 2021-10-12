const maxArea = (matrix: number[][], r: number, c: number) => {
  let i = 0;
  let j = 0;

  let wasPrevious = true;
  let maxCount = 0;
  let count = 0;
  let isAll1 = false;

  while (i <= r - 1) {
    if (matrix[i][j] != 1) {
      i++;
      j = 0;
      count = 0;
    } else {
      count++;
    }

    if (i === -1) break;
    if (j === c - 1) {
      i++;
      j = 0;
    } else {
      j++;
    }
  }
};

const maxAreaArr = [
  [1, 3, 5, 7],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];

console.log(maxArea(maxAreaArr, 4, 4));
