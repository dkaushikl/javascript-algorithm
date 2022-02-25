const combine = (n, k) => {
  const result = [];

  const backtrack = (index, paths = []) => {
    if (paths.length === k) {
      result.push([...paths]);
      return;
    }

    for (let i = index; i <= n; i++) {
      paths.push(i);
      backtrack(i + 1, paths);
      paths.pop();
    }
  };

  backtrack(1, []);
  return result;
};

console.log(combine(4, 2));
console.log(combine(1, 1));
console.log(combine(3, 3));
console.log(combine(6, 3));
