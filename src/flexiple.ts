const produceItself = arr => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let mul = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        mul *= arr[j];
      }
    }
    result.push(mul);
  }
  return result;
};

const produceItself2 = arr => {
  let result = new Array(arr.length);

  result[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    result[i] = arr[i - 1] * result[i - 1];
  }

  console.log(result);
};

const params = [3, 4, 5, 6, 2];
console.log(produceItself2(params));
