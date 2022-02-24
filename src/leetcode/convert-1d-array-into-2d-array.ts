var construct2DArray = function(original, m, n) {
  if (original.length != m * n) return [];
  let result = [];
  let count = 0;
  for (let i = 0; i < m; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(original[count]);
      count++;
    }
    result.push(temp);
  }
  return result;
};

console.log(construct2DArray([1, 2, 3, 4], 2, 2));
console.log(construct2DArray([1, 2], 1, 1));
console.log(construct2DArray([1, 2, 3], 1, 3));
console.log(construct2DArray([3], 1, 2));
