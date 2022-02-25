var createTargetArray = function(nums, index) {
  let temp = [];
  for (let i = 0; i < index.length; i++) {
    let j = index[i];
    let arr1 = temp.slice(0, j);
    let arr2 = temp.slice(j);
    temp = [...arr1, nums[i], ...arr2];
  }

  return temp;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]));
console.log(createTargetArray([1], [0]));
