const search = (nums, target) => {
  if (nums.length <= 0) return -1;
  if (typeof target !== 'number') return -1;

  let start = 0;
  let end = nums.length - 1;
  if (nums[start] === target) return start;
  if (nums[end] === target) return end;

  while (start <= end) {
    console.log(`start, end`, start, end);
    const mid = Math.floor((start + end) / 2);
    console.log(mid);

    if (target === nums[mid]) return mid;

    if (target > nums[mid]) {
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 8, 9, 15, 18], 18));
