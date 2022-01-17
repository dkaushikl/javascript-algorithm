const minSubArrayLen = (target, nums) => {
  const n = nums.length;
  let ans = Number.MAX_SAFE_INTEGER;

  const result = [];

  for (let i = 0; i < n; i++) {
    result.push([nums[i]]);
    for (let j = i; j < n; j++) {
      if (i !== j) result.push([nums[i], nums[j]]);
      let sum = 0;
      for (let k = i; k <= j; k++) {
        if (i !== k) result.push([nums[i], nums[j], nums[k]]);
        sum += nums[k];
      }
      if (sum >= target) {
        ans = Math.min(ans, j - i + 1);
        break; // Found the smallest subarray with sum>=s starting with index i, hence move to next index
      }
    }
  }

  console.log(result);
  return ans !== Number.MAX_SAFE_INTEGER ? ans : 0;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
