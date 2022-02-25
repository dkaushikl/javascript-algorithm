var countKDifference = function(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[j] - nums[i]) === k) {
        count++;
      }
    }
  }

  return count;
};

console.log(countKDifference([1, 2, 2, 1], 1));
console.log(countKDifference([3, 2, 1, 5, 4], 2));
console.log(countKDifference([1, 3], 3));
