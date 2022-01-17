const isValidSudoku = (matrix) => {
  const checkRow = () => {
    for (let i = 0; i < matrix.length; i++) {
      const map = {};
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] !== '.') {
          if (map[matrix[i][j]]) {
            return false;
          } else {
            map[matrix[i][j]] = 1;
          }
        }
      }
    }
    return true;
  };

  const checkColumn = () => {
    for (let i = 0; i < matrix.length; i++) {
      const map = {};
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[j][i] !== '.') {
          if (map[matrix[j][i]]) {
            return false;
          } else {
            map[matrix[j][i]] = 1;
          }
        }
      }
    }
    return true;
  };

  const checkThreeByThree = () => {
    for (let i = 0; i < matrix.length; i += 3) {
      for (let j = 0; j < matrix[i].length; j += 3) {
        const arr = [
          matrix[i][j],
          matrix[i][j + 1],
          matrix[i][j + 2],
          matrix[i + 1][j],
          matrix[i + 1][j + 1],
          matrix[i + 1][j + 2],
          matrix[i + 2][j],
          matrix[i + 2][j + 1],
          matrix[i + 2][j + 2]
        ];
        const map3 = {};

        for (let k = 0; k < arr.length; k++) {
          if (map3[arr[k]] && arr[k] != '.') return false;
          map3[arr[k]] = 1;
        }
      }
    }
    return true;
  };

  return checkRow() && checkColumn() && checkThreeByThree();
};

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

console.log(isValidSudoku(board));
