const moveZero = (nums: string | any[]) => {
  let i = 0;
  let j = i + 1;

  while (i < nums.length - 1) {
    if (nums[i] === 0 && nums[j] != 0) [nums[i], nums[j]] = [nums[j], nums[i]];

    if (i === nums.length - 1) break;

    if (j === nums.length - 1) {
      i += 1;
      j = i + 1;
    } else {
      j += 1;
    }
  }

  return nums;
};

const moveZero1 = (nums: any[]) => {
  return nums.sort((a: number, b: number) => {
    if (b === 0 && a !== 0) return -1;
  });
};

// console.log(moveZero1([0, 1, 0, 3, 12]));
console.log(moveZero1([1, 0, 0, 3]));
