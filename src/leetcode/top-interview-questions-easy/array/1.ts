const removeDuplicates = nums => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  let i = 1;
  let count = 0;
  while (i < nums.length) {
    if (nums[count] !== nums[i]) {
      count++;
      nums[count] = nums[i];
    }
    i++;
  }
  return count + 1;
};

console.log(removeDuplicates([1, 1, 2]));
