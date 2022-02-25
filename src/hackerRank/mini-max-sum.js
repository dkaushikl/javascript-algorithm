function miniMaxSum(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log(sum - max);
  console.log(sum - min);
}

console.log(miniMaxSum([1]));
console.log(miniMaxSum([1, 2, 3, 4, 5]));
console.log(miniMaxSum([5, 4, 2, 1, 3]));
