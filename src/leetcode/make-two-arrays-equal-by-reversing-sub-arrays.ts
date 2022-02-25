var canBeEqual = function(target, arr) {
  target.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);

  let i = 0;
  while (i < arr.length) {
    if (arr[i] !== target[i]) return false;
    i++;
  }
  return true;
};

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
console.log(canBeEqual([7], [7]));
console.log(canBeEqual([3, 7, 9], [3, 7, 12]));
console.log(canBeEqual([1, 2, 2, 3], [1, 1, 2, 3]));
console.log(canBeEqual([1, 1, 1, 1, 1], [1, 1, 1, 1, 1]));
