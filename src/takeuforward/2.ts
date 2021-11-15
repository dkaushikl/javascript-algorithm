const pascalTriangle = n => {
  if (n === 1) return [1];
  if (n === 2) return [[1], [1, 1]];

  const result = [[1], [1, 1]];

  for (let i = 3; i <= n; i++) {
    const arr = [];

    for (let j = 1; j < result[i - 2].length; j++) {
      arr.push(result[i - 2][j] + result[i - 2][j - 1]);
    }

    arr.push(1);
    arr.unshift(1);
    result.push(arr);
  }

  return result;
};

const num = 6;
console.log(pascalTriangle(num));

//    1
//   1 1
//  1 2 1
