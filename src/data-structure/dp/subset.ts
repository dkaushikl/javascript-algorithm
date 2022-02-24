const subsets = _nums => {
  const result = [];

  const backtrack = (nums, paths, index) => {
    result.push([...paths]);

    for (let i = index; i < nums.length; i++) {
      paths.push(nums[i]);
      backtrack(nums, paths, i + 1);
      paths.pop();
    }
  };

  backtrack(_nums, [], 0);

  // return result;
  return result;
};

const subSetParams = [1, 2, 3];
// const subSetParams = [0];
console.log(subsets(subSetParams));

const subsets2 = nums => {
  // we will store all founded set in result variable
  const result = [];

  // index to keep track on which index we are backtracking
  const backtrack = (i, path = []) => {
    // once index will be equal than given array, that means we gone through every track.
    if (i === nums.length) {
      result.push(path);
      return;
    }

    // here we performing two kind of operation either element includes it or not.
    backtrack(i + 1, [...path, nums[i]]);
    backtrack(i + 1, path);
  };

  backtrack(0);
  return result;
};

console.log(subsets2([1, 2, 3]));
