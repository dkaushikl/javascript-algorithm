const validSudoku = (matrix: string | any[]) => {
  for (let i = 0; i < matrix.length; i++) {
    let map2 = {};
    let map = {};

    for (let j = 0; j < matrix[i].length; j++) {
      if (map2[matrix[i][j]] && matrix[i][j] != '.') return false;
      map2[matrix[i][j]] = 1;

      if (map[matrix[j][i]] && matrix[j][i] != '.') return false;
      map[matrix[j][i]] = 1;

      if (i === 0 || i % 3 === 0) {
        if (j === 0 || j % 3 === 0) {
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
          let map3 = {};

          for (let k = 0; k < arr.length; k++) {
            if (map3[arr[k]] && arr[k] != '.') return false;
            map3[arr[k]] = 1;
          }
        }
      }
    }
  }
  return true;
};

console.log(
  validSudoku([
    ['8', '3', '.', '.', '7', '4', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '4', '.', '.', '.', '.', '6', '.'],
    ['5', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ])
);
