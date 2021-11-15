const moveZeros = nums => {
  let i = 0;
  let j = i + 1;

  while (i < nums.length - 1) {
    if (nums[i] !== 0) {
      i++;
      j = i + 1;
      continue;
    }

    if (nums[j] !== 0) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      i++;
      j = i + 1;
      continue;
    }

    if (j === nums.length - 1) {
      i++;
      j = i + 1;
    } else {
      j++;
    }
  }

  return nums;
};

console.log(moveZeros([2, 1]));
console.log(moveZeros([0, 1, 0, 3, 12]));
