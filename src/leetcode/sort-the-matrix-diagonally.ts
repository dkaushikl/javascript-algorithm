var diagonalSort = function(mat) {
  const m = mat.length;
  const n = mat[0].length;

  const map = new Map();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const vector = i - j;
      console.log(vector);
      if (!map.has(vector)) map.set(vector, []);
      map.get(vector).push(mat[i][j]);
    }
  }

  console.log(map);
};

const diagonalSortMat = [
  [3, 3, 1, 1],
  [2, 2, 1, 2],
  [1, 1, 1, 2]
];
// [
//   [1, 1, 1, 1],
//   [1, 2, 2, 2],
//   [1, 2, 3, 3]
// ];
console.log(diagonalSort(diagonalSortMat));
