var minOperations = function(nums) {
  if (nums.length <= 1) return 0;

  let count = 0;
  let i = 1;

  while (i < nums.length) {
    if (nums[i - 1] >= nums[i]) {
      let diff = nums[i - 1] - nums[i] + 1;
      count += diff;
      nums[i] = diff + nums[i];
    }
    i++;
  }

  return count;
};

// console.log(minOperations([1, 5, 2, 4, 1]));
console.log(minOperations([1, 1, 1]));
