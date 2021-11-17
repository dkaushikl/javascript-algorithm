const generate = numRows => {
  if (numRows === 0) return [];
  if (numRows === 1) return [1];

  let result = [[1]];
  for (let i = 1; i < numRows; i++) {
    let anotherArr = [];
    for (let j = 1; j < result[i - 1].length; j++) {
      let sum = result[i - 1][j - 1] + result[i - 1][j];
      anotherArr.push(sum);
    }
    anotherArr.push(1);
    anotherArr.unshift(1);
    result.push(anotherArr);
  }

  return result;
};

console.log(generate(0));
