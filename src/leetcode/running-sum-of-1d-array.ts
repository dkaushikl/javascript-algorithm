const runningSum = function(nums) {
  const left = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) left.push(nums[i]);
    else left.push(left[left.length - 1] + nums[i]);
  }

  return left;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
