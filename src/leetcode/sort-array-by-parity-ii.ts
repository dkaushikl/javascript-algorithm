var sortArrayByParityII = function(nums) {
  let i = 0;

  while (i < nums.length) {
    if (i % 2 !== 0) {
      if (nums[i] % 2 === 0) {
        let j = i + 1;
        while (j < nums.length) {
          if (nums[j] % 2 !== 0) {
            break;
          }
          j++;
        }
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    } else {
      if (nums[i] % 2 !== 0) {
        let j = i + 1;
        while (j < nums.length) {
          if (nums[j] % 2 === 0) {
            break;
          }
          j++;
        }
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
    i++;
  }

  return nums;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
console.log(sortArrayByParityII([2, 3]));
console.log(sortArrayByParityII([3, 2]));
console.log(sortArrayByParityII([1, 3, 2, 4]));
