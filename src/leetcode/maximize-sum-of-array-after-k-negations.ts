var largestSumAfterKNegations = function(nums, k) {
  nums.sort((a, b) => a - b);
  let i = 0;
  while (k > 0) {
    nums[i] = -nums[i];
    if (nums[i] > nums[i + 1]) {
      i++;
    }
    k--;
  }
  return nums.reduce((a, b) => b + a, 0);
};

console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2));
console.log(largestSumAfterKNegations([4, 2, 3], 1));
console.log(largestSumAfterKNegations([3, -1, 0, 2], 3));
console.log(largestSumAfterKNegations([-2, 5, 0, 2, -2], 3));
