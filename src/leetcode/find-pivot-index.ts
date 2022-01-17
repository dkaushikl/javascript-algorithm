let pivotIndex = function(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  const rightSum = sum;
  let i = 0;

  while (i <= nums.length - 1) {
    if (leftSum === rightSum - leftSum - nums[i]) return i;
    else {
      leftSum += nums[i];
    }
    i++;
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
console.log(pivotIndex([-1, -1, 0, 1, 1, 0]));
