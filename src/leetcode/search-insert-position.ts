// https://leetcode.com/problems/search-insert-position/

const searchInsert = (nums, target) => {
  if (nums.length <= 0) return -1;

  let start = 0;
  if (target < nums[start]) return 0;
  if (target === nums[start]) return start;

  let end = nums.length - 1;
  if (target === nums[end]) return end;
  if (target > nums[end]) return end + 1;

  while (start < end) {
    console.log(`start, end`, start, end);

    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (target > nums[mid] && target < nums[mid + 1]) return mid + 1;

    if (target > nums[mid]) {
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid;
    }
  }

  return -1;
};

console.log(searchInsert([1, 3, 5, 6, 1000], 1001));
