const productExceptSelf = function(nums) {
  const left = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) left.push(1);
    else left.push(left[left.length - 1] * nums[i - 1]);
  }

  const right = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      right.push(1);
    } else {
      right.unshift(right[0] * nums[i + 1]);
    }
  }

  const result = [];
  for (let i = 0; i < left.length; i++) {
    result.push(left[i] * right[i]);
  }

  return result;
};
// console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// console.log(productExceptSelf([1, -1]));
