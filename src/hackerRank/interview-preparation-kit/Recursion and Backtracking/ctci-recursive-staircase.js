function stepPerms(n, dp = {}) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  if (dp[n]) return dp[n];

  return (dp[n] =
    stepPerms(n - 1, dp) + stepPerms(n - 2, dp) + stepPerms(n - 3, dp));
}

console.log(stepPerms(5));
