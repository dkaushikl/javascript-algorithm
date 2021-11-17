const searchMatrix = (matrix, target) => {
  let rowIndex = -1;
  let isFound = false;
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];

    if (target === row[0] || target === row[matrix[i].length - 1]) return true;
    if (target > row[0] && target < row[matrix[i].length - 1]) {
      rowIndex = i;
      isFound = true;
    }
  }

  if (!isFound) return false;

  let arr = matrix[rowIndex];
  let start = 0;
  let end = arr.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (target === arr[mid]) return true;

    if (arr[mid] > target) {
      end--;
    }

    if (arr[mid] < target) {
      start++;
    }
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60]
    ],
    3
  )
);
