var searchRange = function(nums, target) {
  let low = 0,
    high = nums.length - 1,
    mid;

  // find the start
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] >= target) high = mid - 1;
    else low = mid + 1;
  }

  console.log(low);
  console.log(high);
  console.log(mid);
  console.log(nums);

  // if target doesn't exist
  if (nums[low] !== target) return [-1, -1];

  const start = low;

  // reset low and high
  low = 0;
  high = nums.length - 1;

  // find the end
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] <= target) low = mid + 1;
    else high = mid - 1;
  }
  return [start, high];
};

console.log(searchRange([0, 0, 0, 1, 2, 3], 0));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([], 0));
console.log(
  searchRange([1, 1, 1, 1, 1, 1, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 8, 8, 8], 8)
);
