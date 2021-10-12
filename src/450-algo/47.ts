const rowWithMax1s = (matrix: number[][], r: number, c: number) => {
  if (matrix.length === 0) return 0;

  let i = 0;
  let j = 0;
  let rowNumber = -1;
  let maxOne = 0;
  let one = 0;

  while (i <= r - 1) {
    if (matrix[i][j] === 1) one++;

    if (i === -1) break;

    if (j === c - 1) {
      if (rowNumber === -1 && one != 0) {
        rowNumber = i;
        maxOne = one;
      } else if (one > maxOne) {
        maxOne = one;
        rowNumber = i;
      }

      i++;
      j = 0;
      one = 0;
    } else {
      j++;
    }
  }

  return rowNumber;
};

const matries = [
  [0, 0],
  [0, 0]
];
// const matries = [[0, 0, 0, 1, 1, 1, 1, 1, 1],
// [0, 0, 0, 0, 1, 1, 1, 1, 1],
// [0, 0, 0, 0, 1, 1, 1, 1, 1],

const rows = 2;
const columns = 2;

console.log(rowWithMax1s(matries, rows, columns));
