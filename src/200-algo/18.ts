const subarraySum = (nums, k) => {
  let map = { 0: 1 };
  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map[sum - k]) {
      count += map[sum - k];
    }
    map[sum] = map[sum] ? map[sum] + 1 : 1;
  }

  return count;
};

const nums = [1, 1, 2, 3];
const k = 4;

console.log(subarraySum(nums, k));

// const isHappy = (n, counter = 0) => {
//   if (counter < 8) {
//     let array = n
//       .toString()
//       .split('')
//       .map(n => n * n);
//     let sum = array.reduce((a, b) => a + b, 0);

//     if (sum === 1) {
//       return true;
//     } else {
//       counter++;
//       return isHappy(sum, counter);
//     }
//   }

//   return false;
// };

const isHappy = (n, i = 0) => {
  const squares = {
    '0': 0,
    '1': 1,
    '2': 4,
    '3': 9,
    '4': 16,
    '5': 25,
    '6': 36,
    '7': 49,
    '8': 64,
    '9': 81
  };
  if (n < 1) return false;

  /**
   * This set will store numbers as we create them.
   * If we create a number already in the set, we
   * assume we're in an infinite cycle.
   */
  let set = new Set();

  while (!set.has(n)) {
    set.add(n);
    let s = n.toString();
    n = 0;
    for (let i = 0; i < s.length; ++i) {
      n += squares[s[i]];
    }
    if (n == 1) return true;
  }

  return false;
};

console.log(isHappy('2'));
