const combine = (n, k) => {
  const result = [];
  const backtrack = (idx, target, path = []) => {
    if (target === 0) {
      result.push([...path]);
      return;
    }

    for (let i = idx; i <= n; i++) {
      path.push(i);
      backtrack(i + 1, target - 1, path);
      path.pop();
    }
  };

  backtrack(1, k);
  return result;
};

console.log(combine(4, 2));
console.log(combine(6, 3));
