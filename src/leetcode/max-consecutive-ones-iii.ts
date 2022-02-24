var longestOnes = function(nums, k) {
  let zeroCount = 0;
  let j = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeroCount++;
    while (zeroCount > k) {
      if (nums[j] === 0) {
        zeroCount--;
      }
      j++;
    }

    max = Math.max(max, i - j + 1);
  }
  return max;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));

// go on every character until we find 0. then allow k character to convert it into 1;
// then check next character is 1
// we have to continue until we found another zero. process will be continue until we get k is zero
// while adding 1, we will also keep count of 1
// if character is not 1 then we need to compare it with count variable with already counted that which is greater and make it final count;
