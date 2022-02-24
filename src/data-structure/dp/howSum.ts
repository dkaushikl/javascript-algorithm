const howSum = (nums, target, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target <= 0) return null;

  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    const remainderResult = howSum(nums, remainder, memo);
    if (remainderResult !== null) return [nums[i], ...remainderResult];
  }

  memo[target] = null;
  return null;
};

console.log(howSum([5, 3, 4, 7], 7));
console.log(howSum([2, 3], 7));
console.log(howSum([2, 4], 7));
console.log(howSum([2, 3, 5], 8));
console.log(howSum([7, 14], 280));
console.log(howSum([7, 14], 300));
