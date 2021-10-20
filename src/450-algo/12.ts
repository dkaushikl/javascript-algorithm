const cyclicRotate = arr => {
  let lastVal = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) arr[i] = arr[i - 1];

  arr[0] = lastVal;
  return arr;
};

const rotateArr = [1, 2, 3, 4, 5];
console.log(cyclicRotate(rotateArr));
