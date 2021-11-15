const setMatrixZeros = (arr: string | any[]) => {
  const result = [];
  const rows = arr.length;
  const cols = arr[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (arr[i][j] === 0) result.push([i, j]);
    }
  }

  const setColumnZero = (rowNumber: string | number) =>
    (matrix[rowNumber] = new Array(cols).fill(0));

  const setRowZero = (colNumber: string | number) => {
    for (let i = 0; i < arr.length; i++) matrix[i][colNumber] = 0;
  };

  for (const item of result) {
    setColumnZero(item[0]);
    setRowZero(item[1]);
  }

  return matrix;
};

const setMatrixZeros1 = (arr: string | any[]) => {
  const rows = arr.length;
  const cols = arr[0].length;

  let firstRowHasZeros = false;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (arr[i][j] === 0) {
        if (i === 0) {
          firstRowHasZeros = true;
        } else {
          arr[i][0] = 0;
        }
        arr[0][j] = 0;
      }
    }
  }

  console.log(firstRowHasZeros);
  console.log(arr);
};

// O(m * n) + o(m + n)
// const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
const matrix = [
  [0, 1, 2, 0],
  [2, 4, 5, 2],
  [1, 3, 1, 5]
];
console.log(setMatrixZeros(matrix));
