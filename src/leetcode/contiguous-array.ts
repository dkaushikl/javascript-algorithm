// Bruteforce way
const findMaxLength = nums => {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let zero = 0;
    let one = 0;

    for (let j = i; j < nums.length; j++) {
      if (nums[j] === 0) {
        zero++;
      } else {
        one++;
      }

      if (zero === one) {
        max = Math.max(zero + one, max);
      }
    }
  }

  return max;
};

// Hashmap
const findMaxLength1 = nums => {
  const map = {};
  let max = 0;
  let count = 0;
  map[count] = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count += -1;
    } else {
      count += 1;
    }

    if (count in map) max = Math.max(max, i - map[count]);
    else map[Number(count)] = i;
  }
  return max;
};

console.log(findMaxLength([0, 1]));
console.log(findMaxLength([0, 1, 0]));
console.log(findMaxLength([0, 0, 1]));
console.log(findMaxLength([0, 1, 1]));
console.log(findMaxLength([0, 1, 0, 1, 0]));
console.log(findMaxLength([0, 1, 0, 0, 1]));
console.log(findMaxLength([0, 1, 1, 0, 1, 1, 0, 1]));

console.log(findMaxLength1([0, 1]));
console.log(findMaxLength1([0, 1, 0]));
console.log(findMaxLength1([0, 0, 1]));
console.log(findMaxLength1([0, 1, 1]));
console.log(findMaxLength1([0, 1, 0, 1, 0]));
console.log(findMaxLength1([0, 1, 0, 0, 1]));
console.log(findMaxLength1([0, 1, 1, 0, 1, 1, 0, 1]));
