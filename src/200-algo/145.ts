const containsDuplicate = (nums: number[]): boolean => {
  const map = {};

  for (const item of nums) {
    if (map[item]) return true;
    else map[item] = 1;
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));
