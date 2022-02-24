// this gives you result in o(1) spece complexity but it takes more time complexity than using counting

// we will initialize i and count with zero - i for loop and count for end result
// we go over nums element one by one
// check that is there any precedeing number similar to current number
// if yes then remove that preceding number
// increase count variable one with one loop
// return count;

var removeDuplicates = function(nums) {
  let i = 0;
  let count = 0;
  while (i < nums.length) {
    count++;
    while (nums[i] === nums[i + 1]) {
      i++;
    }
    i++;
  }
  return count;
};

var removeDuplicates1 = function(nums) {
  let i = 0;
  while (i < nums.length) {
    while (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    }
    i++;
  }
  return nums.length;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([1, 2, 2, 3]));
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5]));
