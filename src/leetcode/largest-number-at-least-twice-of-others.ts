var dominantIndex = function(nums) {
  if (nums.length < 0) return -1;
  if (nums.length === 1 && nums[0] <= 0) return -1;
  if (nums.length === 1 && nums[0] > 0) return 0;

  let map = {};
  let firstMax = nums.length > 1 ? Math.max(nums[0], nums[1]) : nums[0];
  let secondMax = nums.length > 1 ? Math.min(nums[0], nums[1]) : nums[0];

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
    if (firstMax < nums[i]) {
      let temp = firstMax;
      firstMax = nums[i];
      secondMax = temp;
    }

    if (nums[i] > secondMax && nums[i] < firstMax) {
      secondMax = nums[i];
    }
  }

  console.log(firstMax);
  console.log(secondMax);

  return firstMax >= secondMax * 2 ? map[firstMax] : -1;
};

console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));
console.log(dominantIndex([1]));
console.log(dominantIndex([0, 0, 0, 1]));
console.log(dominantIndex([0, 0, 3, 2]));
