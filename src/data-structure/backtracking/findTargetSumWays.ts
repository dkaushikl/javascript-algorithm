const findTargetSumWays = (n, t) => {
  const result = [];

  const backtrack = (nums = n, sum = 0, path = []) => {
    if (sum === t && nums.length === 0) {
      result.push([...path]);
      return;
    }

    if (nums.length === 0) {
      return;
    }

    backtrack(nums.slice(1), sum + -nums[0], [...path, -nums[0]]);
    backtrack(nums.slice(1), sum + nums[0], [...path, nums[0]]);
  };

  backtrack();
  return result;
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
