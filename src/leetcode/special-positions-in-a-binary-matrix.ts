var numSpecial = function(mat) {
  const checkColumn = (i, j) => {
    for (let k = 0; k < mat.length; k++) {
      if (k !== i && mat[k][j] === 1) {
        return false;
      }
    }
    return true;
  };

  const checkRow = (i, j) => {
    for (let k = 0; k < mat[i].length; k++) {
      if (k !== j && mat[i][k] === 1) {
        return false;
      }
    }
    return true;
  };

  let count = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        if (checkColumn(i, j) && checkRow(i, j)) {
          count++;
        }
      }
    }
  }
  return count;
};

// var specialMat = [
//   [1, 0, 0],
//   [0, 0, 1],
//   [1, 0, 0]
// ];

var specialMat = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
];
console.log(numSpecial(specialMat));
