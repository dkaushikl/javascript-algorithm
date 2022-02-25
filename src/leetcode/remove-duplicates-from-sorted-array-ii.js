const removeDuplicates = nums => {
  let i = 2;
  let count = 0;
  while (i < count + nums.length) {
    if (
      nums[i] === nums[i - 1] &&
      nums[i] === nums[i - 2] &&
      nums[i] !== Infinity
    ) {
      let j = i;
      while (nums[j] === nums[j + 1]) {
        count++;
        j++;
      }
      count++;
      j++;

      let k = i;
      while (k < nums.length) {
        nums[k] = nums[j] || Infinity;
        j++;
        k++;
      }
    }
    i++;
  }

  return nums.length - count;
};

const removeDuplicates1 = nums => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === nums[i - 2]) {
      nums.splice(i, 1);
    }
  }
};

console.log(removeDuplicates1([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates1([1, 1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates1([0, 0, 1, 1, 1, 1, 2, 3, 3]));
console.log(removeDuplicates1([1, 1, 0, 0, 0]));
