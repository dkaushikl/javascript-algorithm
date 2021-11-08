const rotateMatrix = matrix => {
  console.log(matrix);
};

const printSpiralForm = matrix => {};

const createMatrix = n => {
  const matrix = new Array(n);

  let count = 1;
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = count++;
    }
  }

  return matrix;
};

console.log(rotateMatrix(createMatrix(3)));
// console.log(rotateMatrix(createMatrix(4)));
// let result = quoteSample.match(myRegex);
