var check = function(nums) {
  let parts = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) parts += 1;

    if (parts > 1) return false;
  }

  return parts === 0 || nums[0] >= nums[nums.length - 1];
};

console.log(check([4, 5, 1, 2, 3]));
console.log(check([2, 1, 3, 4]));
console.log(check([6, 1, 2, 3, 4]));
console.log(check([5, 1, 2, 3, 4]));
console.log(check([100, 50, 70, 80, 90]));
console.log(check([100, 60, 50, 70, 80, 90]));
