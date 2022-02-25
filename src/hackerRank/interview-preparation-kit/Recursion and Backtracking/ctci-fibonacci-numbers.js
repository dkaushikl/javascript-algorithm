function fibonacci(n, dp = {}) {
  if (dp[n]) return dp[n];
  if (n === 0) return 0;
  if (n === 1) return 1;

  return (dp[n] = fibonacci(n - 2, dp) + fibonacci(n - 1, dp));
}

console.log(fibonacci(6));
