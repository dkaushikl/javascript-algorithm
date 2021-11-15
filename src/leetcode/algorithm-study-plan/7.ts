// O(n)2
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// O(n)
const twoSum1 = (nums, target) => {
  let i = 0;
  let j = i + 1;

  while (i < nums.length - 1) {
    if (nums[i] + nums[j] === target) return [i, j];

    if (j === nums.length - 1) {
      i++;
      j = i + 1;
    } else {
      j++;
    }
  }
};

// O(n)
const twoSum3 = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map.hasOwnProperty(nums[i])) {
      return [map[nums[i]], i];
    } else {
      map[target - nums[i]] = i;
    }
  }
};

// O(nlogn)
const twoSum2 = (nums, target) => {
  if (nums.length <= 0) return [-1, -1];
  if (nums[0] + nums[nums.length - 1] === target) return [0 + 1, nums.length];

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const sum = nums[start] + nums[end];

    if (target === sum) return [start + 1, end + 1];

    if (target > sum) start++;
    if (target < sum) end--;
  }
};

// console.log(twoSum2([2, 7, 11, 15], 9));
// console.log(twoSum2([5, 25, 75], 100));
// console.log(twoSum2([2, 3, 4], 6));
// console.log(twoSum2([-1, 0], -1));
console.log(twoSum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 19));
