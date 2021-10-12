const median = (matrix: number[][], r: number, c: number) => {
  const arr = [...matrix]
    .join()
    .split(',')
    .map(x => +x)
    .sort((a, b) => a - b);
  const median = arr.length / 2;
  return !Number.isInteger(median)
    ? arr[Math.floor(arr.length / 2)]
    : arr[median];
};

const median2 = (matrix: number[][], r: number, c: number) => {
  const arr = [];
  let i = r - 1;
  let j = c - 1;

  // O(n)
  while (i >= 0 && j >= 0) {
    arr.push(matrix[i][j]);
    if (i === -1) break;

    if (j === 0) {
      i--;
      j = c - 1;
    } else {
      j--;
    }
  }

  arr.sort((a, b) => a - b);

  const median = arr.length / 2;
  return !Number.isInteger(median)
    ? arr[Math.floor(arr.length / 2)]
    : arr[median];
};

const matrixes = [
  [1, 3, 5],
  [2, 6, 9],
  [3, 6, 9]
];

const row = 3;
const column = 3;

console.log(median2(matrixes, row, column));
