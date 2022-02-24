// https://leetcode.com/problems/subsets/
const subset = arr => {
  const result = [];

  const backtrack = (nums, idx, path) => {
    result.push([...path]);

    for (let i = idx; i < nums.length; i++)
      backtrack(nums, i + 1, [...path, nums[i]]);
  };

  backtrack(arr, 0, []);
  return result;
};

// console.log(subset([1, 2, 3, 4]));
