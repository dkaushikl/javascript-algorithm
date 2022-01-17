const matrixReshape = (matrix, r, c) => {
  if (r == 0 || c == 0 || r * c != matrix.length * matrix[0].length)
    return matrix;

  // Convert your arr into 1d array. you can do it either using flat method or self for loop
  const temp = [];
  let index = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      temp[index++] = matrix[i][j];
    }
  }

  // generate sample array based on given row and column
  const arr = new Array(r).fill(0);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(c).fill(0);
  }
  // update your array based on temporary array by extracting single value
  index = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      arr[i][j] = temp[index];
      index++;
      if (arr[i][j] == undefined) return matrix;
    }
  }
  return arr;
};

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4]
    ],
    4,
    1
  )
);
