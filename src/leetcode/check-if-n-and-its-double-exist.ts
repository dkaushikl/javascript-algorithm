const checkIfExist = (arr) => {
  const m = {};

  for (let i = 0; i < arr.length; i++) {
    if (m[arr[i]]) {
      return true;
    } else {
      if (arr[i] % 2 === 0) m[arr[i] / 2] = 1;
      m[arr[i] * 2] = 1;
    }
  }
  return false;
};

console.log(checkIfExist([10, 2, 5, 3]));
console.log(checkIfExist([7, 1, 14, 11]));
console.log(checkIfExist([3, 1, 7, 11]));
