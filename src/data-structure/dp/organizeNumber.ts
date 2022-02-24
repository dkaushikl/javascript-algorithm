const organizeNumber = (mat, row = mat.length, col = mat[0].length) => {
  const newArr = [];
  const swapAtRightPlace = (
    k,
    board,
    newRow,
    newCol,
    i,
    j,
    type,
    path = []
  ) => {
    if (newRow < 0 || newCol < 0 || newRow >= row || newCol >= col)
      return false;

    if (newRow === i && newCol === j) {
      newArr.push([...path, k]);
      return true;
    }

    if (type === 'UL')
      return (
        swapAtRightPlace(k, board, newRow - 1, newCol, i, j, type, [
          ...path,
          'U'
        ]) ||
        swapAtRightPlace(k, board, newRow, newCol - 1, i, j, type, [
          ...path,
          'L'
        ])
      );
    else if (type === 'UR')
      return (
        swapAtRightPlace(k, board, newRow - 1, newCol, i, j, type, [
          ...path,
          'U'
        ]) ||
        swapAtRightPlace(k, board, newRow, newCol + 1, i, j, type, [
          ...path,
          'R'
        ])
      );
    else if (type === 'DL')
      return (
        swapAtRightPlace(k, board, newRow + 1, newCol, i, j, type, [
          ...path,
          'D'
        ]) ||
        swapAtRightPlace(k, board, newRow, newCol - 1, i, j, type, [
          ...path,
          'L'
        ])
      );
    else if (type === 'DR')
      return (
        swapAtRightPlace(k, board, newRow + 1, newCol, i, j, type, [
          ...path,
          'D'
        ]) ||
        swapAtRightPlace(k, board, newRow, newCol + 1, i, j, type, [
          ...path,
          'R'
        ])
      );
  };

  const findIndexOfNumber = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(num)) {
        const idx = arr[i].indexOf(num);
        return [i, idx];
      }
    }
    return [-1, -1];
  };

  let k = 1;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      const [newRow, newCol] = findIndexOfNumber(mat, k);
      console.log([newRow, newCol]);

      if (newRow === -1 && newCol === -1) return 'Not Possible';

      let type = '';
      if (i <= newRow && j <= newCol) {
        type = 'UL';
      } else if (i <= newRow && j >= newCol) {
        type = 'UR';
      } else if (i >= newRow && j <= newCol) {
        type = 'DL';
      } else if (i >= newRow && j >= newCol) {
        type = 'DR';
      }
      swapAtRightPlace(k, mat, newRow, newCol, i, j, type);
      k++;
    }
  }

  return newArr;
};

const organizeMat = [
  [4, 8, 9],
  [6, 2, 1],
  [3, 7, 5]
];
console.log(organizeNumber(organizeMat));

// OUTPUT -
//   [['U', 'L', 'L', 1],
//   ['U', 2],
//   ['U', 'U', 'R', 'R', 3],
//   ['D', 4],
//   ['U', 'L', 5],
//   ['R', 'R', 6],
//   ['L', 7],
//   ['D', 'D', 8],
//   ['D', 'D', 9]]
