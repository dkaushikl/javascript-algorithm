var climbStairs = function(n, memo = {}) {
  if (n <= 1) return 1;
  if (n === 2) return 2;

  if (memo[n]) {
    return memo[n];
  }

  return (memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo));
};

// console.log(climbStairs(3));
// console.log(climbStairs(4));
// console.log(climbStairs(5));
// console.log(climbStairs(6));
// console.log(climbStairs(7));
// console.log(climbStairs(8));
console.log(climbStairs(9));
