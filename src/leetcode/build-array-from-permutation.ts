var buildArray = function(nums) {
  let i = 0;

  while (i < nums.length) {
    console.log(nums[nums[i]], nums[i]);
    let temp = nums[i];
    nums[i] = nums[nums[i]];
    nums[nums[i]] = temp;
    i++;
  }
  return nums;
};

console.log(buildArray([3, 1, 0, 2, 4]));
// console.log(buildArray([5, 0, 1, 2, 3, 4]));
