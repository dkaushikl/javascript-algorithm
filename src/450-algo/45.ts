const searchMatrix = (matrix: number[][], target: number) => {
  // const arr = [];
  let i = 0;
  let j = 0;

  while (i <= matrix.length - 1) {
    if (matrix[i][j] === target) return true;
    if (i === -1) break;

    if (j === matrix[0].length - 1) {
      i++;
      j = 0;
    } else {
      j++;
    }
  }

  return false;
  // const binarySearch = (arr: number[], param: number) => {
  //   let start = 0;
  //   let end = arr.length - 1;

  //   while (start <= end) {
  //     const middle = Math.floor((start + end) / 2);
  //     if (arr[middle] === param) return middle;

  //     if (arr[middle] > param) end = middle - 1;

  //     if (arr[middle] < param) start = middle + 1;
  //   }

  //   return -1;
  // };

  // return binarySearch(arr, target) !== -1;
};

const matrices = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
];

console.log(searchMatrix(matrices, 3));
