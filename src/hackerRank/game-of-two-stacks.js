function twoStacks(maxSum, a, b) {
  var count = 0;
  var sum = 0;
  while (a.length > 0 || b.length > 0) {
    var item = 0;
    if (a[0] > b[0] || sum + b[0] === maxSum) item = b.shift();
    else item = a.shift();
    if (sum + item > maxSum) return count;
    sum += item;
    count++;
    if (sum >= maxSum) {
      return count;
    }
  }
  return 0;
}
console.log(
  twoStacks(
    12,
    [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1
    ]
  )
);
// console.log(twoStacks(12, [1, 2, 3, 4, 5], [6, 7, 8, 9]));
// console.log(twoStacks(10, [4, 2, 4, 6, 1], [2, 1, 8, 5]));
