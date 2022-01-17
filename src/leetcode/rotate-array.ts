const rotate = (nums: number[], k: number) => {
  nums.unshift(...new Array(k).fill(0));

  for (let j = k - 1; j >= 0; j--) {
    nums[j] = nums.pop();
  }

  return nums;
};

const rotate2 = (nums: number[], k: number) => {
  let i = 0;
  while (i < 3) {
    nums.unshift(nums.pop());
    i++;
  }
  return nums;
};

console.log(rotate([-1, -100, 3, 99], 2));
