// 15. 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0

// bruteforce
var threeSum1 = function(nums) {
  nums.sort((a, b) => a - b);

  let i = 0;
  let j = i + 1;
  let k = i + 2;
  let result = [];
  let map = {};
  while (i < nums.length - 2) {
    console.log(i, j, k);

    if (nums[i] + nums[j] + nums[k] === 0) {
      const key = `${nums[i]}-${nums[j]}-${nums[k]}`;
      if (!(key in map)) {
        result.push([nums[i], nums[j], nums[k]]);
        map[key] = true;
      }
    }

    if (i === nums.length - 3 && j === nums.length - 2 && k === nums.length - 1)
      break;

    if (j === nums.length - 2 && k === nums.length - 1) {
      i++;
      j = i + 1;
      k = j + 1;
    } else if (k === nums.length - 1) {
      j++;
      k = j + 1;
    } else {
      k++;
    }
  }
  return result;
};

// two pointer approach
var threeSum2 = function(nums) {
  nums = nums.sort((a, b) => a - b);
  console.log(nums);
  let res = [];
  for (var i = 0; i < nums.length - 2 && nums[i] <= 0; i++) {
    while (nums[i] === nums[i - 1]) {
      i++;
    }

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];

      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);

        l++;
        r--;
        while (l < r && nums[l] === nums[l - 1]) l++;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return res;
};

// Five test cases to run function on
// console.log(threeSum([-2, 0, 0, 2, 2])) // [[-2,0,2]]
// console.log(threeSum([-2, 0, 1, 1, 2])) // [[-2,0,2],[-2,1,1]]
var startTime = performance.now();
console.log(
  threeSum2([
    -1,
    0,
    1,
    2,
    -1,
    -4,
    5,
    6,
    7,
    8,
    8,
    9,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
  ])
); // [[-1,-1,2],[-1,0,1]]
var endTime = performance.now();
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
// console.log(threeSum([-1, 0, 0, 0, 0, 0])) // [[0,0,0]]
// console.log(threeSum([0])) // []
