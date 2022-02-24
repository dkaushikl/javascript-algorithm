const uniquePaths = (m, n, memo = {}, count = 0) => {
  if (m < 1 || n < 1) return 0;

  if (m === 1 && n === 1) {
    return 1;
  }

  if (memo[`${m}-${n}`]) return memo[`${m}-${n}`];

  const result =
    uniquePaths(m - 1, n, memo, count) + uniquePaths(m, n - 1, memo, count);
  memo[`${m}-${n}`] = result;
  return memo[`${m}-${n}`];
};

console.log(uniquePaths(3, 2));
console.log(uniquePaths(3, 7));
console.log(uniquePaths(10, 10));
console.log(uniquePaths(1, 1));
console.log(uniquePaths(0, 0));
console.log(uniquePaths(0, 1));
console.log(uniquePaths(1, 0));
console.log(uniquePaths(15, 15));
console.log(uniquePaths(20, 20));
