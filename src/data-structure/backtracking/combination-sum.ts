const combinationSum = (candidates, target) => {
  candidates.sort((a, b) => a - b);

  const result = [];
  const cache = {};

  const backtrack = (arr, idx, n, path) => {
    if (n === 0) {
      const buildPath = [...path].join('-');
      if (!cache[buildPath]) {
        result.push([...path]);
        cache[buildPath] = true;
      }
      return;
    }

    if (n < 0) return;

    for (let i = idx; i < arr.length; i++)
      backtrack(arr, i, n - arr[i], [...path, arr[i]]);
  };

  backtrack(candidates, 0, target, []);
  return result;
};

console.log(combinationSum([1, 2, 3, 4, 5], 5));
console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 2, 2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2], 1));
