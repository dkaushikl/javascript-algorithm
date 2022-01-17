const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  let i = 1;
  let count = 0;
  while (i < nums.length) {
    if (nums[count] !== nums[i]) {
      count++;
      nums[count] = nums[i];
    }
    i++;
  }
  return count + 1;
};

console.log(removeDuplicates([1, 1, 2]));

const findPermutations = (string) => {
  if (!string || typeof string !== 'string') {
    return 'Please enter a string';
  } else if (string.length < 2) {
    return string;
  }

  const permutationsArray = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    const remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);

    for (const permutation of findPermutations(remainingChars)) {
      permutationsArray.push(char + permutation);
    }
  }
  return permutationsArray;
};

console.log(findPermutations('abc'));
