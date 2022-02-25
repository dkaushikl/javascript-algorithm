const subsetXORSum = (nums, stored = []) => {
  console.log(nums);

  if (nums.length === 0) return null;

  if (nums.length === 1) return [nums[0]];

  stored.push(nums[0]);

  subsetXORSum(nums.slice(1), stored);

  return stored;
};

console.log(subsetXORSum([1, 3]));
