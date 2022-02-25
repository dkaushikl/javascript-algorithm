// https://leetcode.com/problems/broken-calculator/

// Approach: work backward
var brokenCalc = function(startValue, target) {
  let result = 0;

  while (target > startValue) {
    result++;
    if (target % 2 === 0) {
      target /= 2;
    } else {
      target++;
    }
  }

  console.log(target);
  console.log(result);

  result = result + (startValue - target);

  return result;
};

console.log(brokenCalc(2, 3));
