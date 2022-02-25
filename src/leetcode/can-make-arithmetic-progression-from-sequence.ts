var canMakeArithmeticProgression = function(arr) {
  arr.sort((a, b) => a - b);

  let i = 1;
  let consecutiveNums = arr[i - 1] - arr[i];
  while (i < arr.length) {
    if (consecutiveNums !== arr[i - 1] - arr[i]) {
      return false;
    }
    i++;
  }
  return true;
};

console.log(canMakeArithmeticProgression([3, 5, 1]));
console.log(canMakeArithmeticProgression([1, 2, 4]));
