const rotate = (nums, k) => {
  if (k % nums.length === 0) return nums;

  nums.unshift(...new Array(k).fill(0));

  for (let i = k - 1; i >= 0; i--) {
    nums[i] = nums.pop();
  }

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
