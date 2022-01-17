const singleNumber = (nums) => {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    // XOR sign - compare two operands and check whethere both are same otherwise calculate value and return result and at alst it will return compared value
    res ^= nums[i];
    console.log(res);
  }
  return res;
};

// console.log(singleNumber([4, 1, 2, 1, 2]));
// console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([1]));
