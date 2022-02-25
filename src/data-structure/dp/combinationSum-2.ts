const combinationSum2 = (candidates, target) => {
  candidates.sort((a, b) => a - b);
  const result = [];

  const backtrack = (arr, idx, sum, path = []) => {
    if (0 === target) {
      result.push([...path]);
      return;
    }

    if (target < 0) return;

    backtrack(arr, idx + 1, sum + arr[idx], [...path, arr[idx]]);
    backtrack(arr, idx + 1, sum, path);
  };

  backtrack(candidates, 0, 0);
  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
