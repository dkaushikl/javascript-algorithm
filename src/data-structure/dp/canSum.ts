const canSum = (nums, target, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target <= 0) return false;

  for (let i = 0; i < nums.length; i++)
    if (canSum(nums, target - nums[i], memo)) return true;

  memo[target] = false;
  return false;
};

console.log(canSum([5, 3, 4, 7], 7));
console.log(canSum([2, 4], 7));
console.log(canSum([7, 14], 300));
