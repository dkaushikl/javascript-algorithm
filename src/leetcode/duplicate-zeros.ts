const duplicateZeros = arr => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i += 1;
    }
  }
  return arr;
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
console.log(duplicateZeros([1, 2, 3]));
console.log(duplicateZeros([0]));
console.log(duplicateZeros([0, 0, 0, 0, 0, 0, 0]));
