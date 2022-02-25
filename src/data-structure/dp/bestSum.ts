const main = (arr, target) => {
  const finalResult = [];
  bestSum(arr, target, finalResult);

  let minLength = Number.MAX_SAFE_INTEGER;
  let minResult = [];

  console.log(finalResult);

  for (let i = 0; i < finalResult.length; i++) {
    if (minLength > finalResult[i].length) {
      minLength = finalResult[i].length;
      minResult = finalResult[i];
    }
  }

  return minResult;
};

const bestSum = (nums, target, allCombination, result = []) => {
  if (target === 0) {
    allCombination.push(result);
    return [];
  }
  if (target <= 0) return null;

  for (const num of nums) {
    const remainder = target - num;
    bestSum(nums, remainder, allCombination, [...result, num]);
  }

  return null;
};

// console.log(main([5, 3, 4, 7], 7));
// console.log(main([2, 3], 7));
// console.log(main([2, 4], 7));
// console.log(main([2, 3, 5], 8));
// console.log(main([5, 25], 50));
// console.log(main([7, 14], 280));
// console.log(main([7, 14], 300));

const bestSum2 = (nums, target, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortestCombination = null;

  for (const num of nums) {
    const remainderResult = bestSum2(nums, target - num, memo);
    if (remainderResult != null) {
      const combination = [...remainderResult, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      )
        shortestCombination = combination;
    }
  }

  memo[target] = shortestCombination;
  return shortestCombination;
};

console.log(bestSum2([5, 3, 4, 7], 7));
console.log(bestSum2([2, 3], 7));
console.log(bestSum2([2, 4], 7));
console.log(bestSum2([2, 3, 5], 8));
console.log(bestSum2([5, 25], 50));
console.log(bestSum2([7, 14], 280));
console.log(bestSum2([7, 14], 300));
