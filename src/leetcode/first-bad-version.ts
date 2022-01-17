// https://leetcode.com/problems/first-bad-version/

const solution = (nums: number) => {
  if (nums <= 0) return -1;

  let start = 1;
  let end = nums;

  if (isBadVersion(start)) return start;

  while (start <= end) {
    if (start === end && isBadVersion(start)) return start;

    const mid = Math.floor((start + end) / 2);

    if (isBadVersion(mid)) end = mid;
    else start = mid + 1;
  }

  return -1;
};

const isBadVersion = (bad: number) => {
  if (bad >= 100) {
    return true;
  }
  return false;
};

console.log(solution(50));
