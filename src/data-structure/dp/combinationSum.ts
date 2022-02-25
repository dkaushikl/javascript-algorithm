const main = (candidates, target) => {
  const finalResult = [];
  const result = [];
  combinationSum(candidates, target, result, finalResult);
  return finalResult;
};

const combinationSum = (candidates, target, result, finalResult) => {
  if (target === 0) {
    finalResult.push([...result]);
    return;
  }
  if (target < 0) return;

  for (let i = 0; i < candidates.length; i++) {
    const remainder = target - candidates[i];
    combinationSum(
      candidates,
      remainder,
      [...result, candidates[i]],
      finalResult
    );
  }
};

console.log(main([2, 3, 6, 7], 7));
console.log(main([2, 3, 5], 8));
