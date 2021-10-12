const sortedMatrix = (matrix: number[][]) => {
  const arr = [];
  let i = 0;
  let j = 0;

  while (i <= matrix.length - 1) {
    arr.push(matrix[i][j]);
    if (i === -1) break;

    if (j === matrix[0].length - 1) {
      i++;
      j = 0;
    } else {
      j++;
    }
  }
  const [list, chunkSize] = [arr.sort((a, b) => a - b), 3];
  return [...Array(Math.ceil(list.length / chunkSize))].map(_ =>
    list.splice(0, chunkSize)
  );
};

const searchMatrixArr = [
  [5, 4, 7],
  [1, 3, 8],
  [2, 9, 6]
];

console.log(sortedMatrix(searchMatrixArr));
