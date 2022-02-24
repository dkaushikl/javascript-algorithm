const subsets = nums => {
  const result = [];

  const backtrack = (arr, path) => {
    result.push([...path]);

    for (let i = 0; i < arr.length; i++) {
      backtrack(arr.slice(i + 1), [...path, arr[i]]);
    }
  };

  backtrack(nums, []);
  return result;
};

console.log(subsets([1, 2, 3]));
