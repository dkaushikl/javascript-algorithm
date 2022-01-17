const sortedSquares = nums => {
  nums = nums
    .map(x => Math.abs(x))
    .sort((a, b) => a - b)
    .map(x => x * x);
  return nums;
};

const sortedSquares1 = nums => {
  let i = 0;
  let j = i + 1;
  let minIndex = 0;
  while (i < nums.length) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      minIndex = Math.abs(nums[minIndex]) > Math.abs(nums[j]) ? j : minIndex;
    }

    if (j === nums.length - 1 || j === nums.length) {
      [nums[minIndex], nums[i]] = [
        Math.abs(nums[i]),
        Math.abs(nums[minIndex] * nums[minIndex])
      ];
      i++;
      j = i + 1;
      minIndex = i;
    } else {
      j++;
    }
  }
  return nums;
};

const squareArr = [-7, -3, 2, 3, 11];
console.log(sortedSquares(squareArr));
console.log(sortedSquares1(squareArr));
