var kWeakestRows = function(mat, k) {
  let temp = [];
  for (let i = 0; i < mat.length; i++) {
    let count = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) count++;
    }
    temp.push([i, count]);
  }
  temp.sort((a, b) => a[1] - b[1]);
  return temp.slice(0, k).map(x => x[0]);
};

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1]
    ],
    3
  )
);
