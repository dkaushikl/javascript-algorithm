var findErrorNums = function(nums) {
  let i = 0;
  let correctIndex;
  while (i < nums.length) {
    correctIndex = nums[i] - 1;
    if (nums[i] != nums[correctIndex]) {
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i++;
    }
  }
  for (let index = 0; index < nums.length; index++) {
    if (index != nums[index] - 1) {
      return [nums[index], index + 1];
    }
  }
  return [-1, -1];
};

console.log(findErrorNums([1, 11, 2, 3, 2, 4]));
console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
console.log(findErrorNums([2, 2]));
