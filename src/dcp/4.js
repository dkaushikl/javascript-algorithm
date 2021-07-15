// Problem 4
//
// This problem was asked by Stripe.
//
// Given an array of integers, find the first missing positive integer in linear time and constant space.
// In other words, find the lowest positive integer that does not exist in the array.
// The array can contain duplicates and negative numbers as well.
//
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
//
// You can modify the input array in-place.
//
// https://leetcode.com/problems/first-missing-positive/
//
// O(N) Time complexity
// O(1) Space complexity
// N is the number of elements in the array

// Overview:
// 1. Partition the positive numbers on left side and 0s/negative to right side
// 2. Mark positive elements indices as negative if valid
// 3. Find first positive index that element is positive
//
// Explanation:
// The paritioning gets rid of the 0s and negative numbers
// nums[0 through k - 1] will have positive integers
// The missing number has to be somewhere the range of 1 to k + 1, NOT TALKING ABOUT NUMS ELEMENTS
// Mark the index of the value because it is not missing
//
// For example:
// [50, 1, 4, 2, -1] Already Parititioned
// We only care about the positive numbers, so k is 4. 4 positive numbers
// The missing number has to be in the range of 1 and 5. (4 Positive numbers + 1)
//
// Iterate through the index values to k
// 50: Not in the range of 1 and 5. Do nothing
// 1: Is in the range of 1 and 5, set index 0 (1 - 1) to negative if it isnt. [-50, 1, 4, 2, -1]
// 4: Is in the range of 1 and 5, set index 3 (4 - 1) to negative if it isnt. [-50, 1, 4, -2, -1]
// 2: Is in the range of 1 and 5, set index 1 (2 - 1) to negative if it isnt. [-50, -1, 4, -2, -1]
//
// With [-50, -1, 4, -2, -1]
// The index of 2 is positive, so the missing number is 3 (2 + 1)
//
// [1, 2, 0] would have k = 2, and turns into [-1, -2, 0]. 3 is the missing number

// Time Complexity: O(nlog(n))
// Space Complexity: O(n)
function solution(nums) {
  nums = nums.sort((a, b) => a - b).filter(num => num > 0);
  let j = 1;
  for (let i = 0; i < nums.length; i++) {
    if (j == nums[i]) j++;
    else return j;
  }
  return j;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
function solution2(nums) {
  let m = new Map();
  for (let i = 0; i < nums.length; i++) {
    m.set(nums[i], 1);
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!m.has(i)) return i;
  }
  return nums.length + 1;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
function solution3(nums) {
  debugger;
  for (let i = 0; i < nums.length; i++) {
    let idx = nums[i] - 1;
    if (i == idx || nums[i] == nums[idx]) continue; // already positioned or nums[i] is a duplicate
    if (idx >= 0 && idx <= nums.length - 1) {
      [nums[i], nums[idx]] = [nums[idx], nums[i]];
      i--;
    }
  }

  // for (let i = 0; i < nums.length; i++) {
  //   if (i + 1 == nums[i]) continue;
  //   else return i + 1;
  // }

  // return nums.length + 1;
}

console.log(solution3([2, 3, 5, 6, 7, 8]));
console.log(solution3([-8, 5, -5, 2, 1, -2, 3]));
console.log(solution3([2, 1, 3, -4]));
console.log(solution3([3, 4, -1, 1]));
console.log(solution3([0, 1, 2]));
console.log(solution([-1, -3]));
console.log(solution([7, 8, 9, 11, 12]));
