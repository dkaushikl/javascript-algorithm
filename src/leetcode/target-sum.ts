function findTargetSumWays(nums, target) {
  if (nums.length === 1 && nums[0] === target) return 1;
  let totalTarget = 0;
  const traverse = (i: number) => {
    let sum = 0;
    let j = 0;
    while (j < nums.length) {
      if (i !== j) {
        sum += nums[j];
      }
      j++;
    }

    if (-nums[i] + sum === target) {
      totalTarget++;
    }
    if (nums[i] + sum === target) {
      totalTarget++;
    }
  };

  for (let i = 0; i < nums.length; i++) {
    traverse(i);
  }

  return totalTarget;
}

console.log(findTargetSumWays([1, 0], 1));
console.log(findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1));
