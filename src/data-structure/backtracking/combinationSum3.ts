const combinationSum3 = (n, k) => {
  const result = [];

  const backtrack = (target, idx = 1, path = []) => {
    if (target === 0 && path.length === n) {
      result.push([...path]);
      return;
    }

    if (path.length >= n) return;

    for (let i = idx; i <= 9; i++) backtrack(target - i, i + 1, [...path, i]);
  };

  backtrack(k);
  return result;
};

console.log(combinationSum3(3, 7));
// console.log(combinationSum3(3, 25));
// console.log(combinationSum3(3, 16));
