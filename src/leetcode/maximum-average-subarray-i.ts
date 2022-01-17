const findMaxAverage = function(nums, k) {
  let maxAvg = 0;
  let count = 0;
  for (let i = 0; i < nums.length - k + 1; i++) {
    let sum = nums[i];
    for (let j = i + 1; j < i + k; j++) {
      count++;
      sum += nums[j];
    }
    maxAvg = Math.max(maxAvg, sum / k);
  }
  return maxAvg;
};

const findMaxAverage1 = function(nums, k) {
  let i = 0;
  let maxAvg = -Infinity;
  let arrSum = 0;
  while (i < nums.length - k + 1) {
    if (!arrSum) arrSum = nums.slice(i, i + k).reduce((a, b) => b + a, 0);
    else arrSum = arrSum - nums[i - 1] + nums[i + k - 1];
    maxAvg = Math.max(arrSum / k, maxAvg);
    i++;
  }
  return maxAvg;
};

console.log(findMaxAverage1([-1], 1));
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// console.log(findMaxAverage1([5], 1));
