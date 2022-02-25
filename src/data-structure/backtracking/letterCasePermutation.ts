const letterCasePermutation = str => {
  const result = [];
  const cache = {};
  const backtrack = (arr, path = []) => {
    if (path.length === str.length) {
      const key = [...path].join('');
      if (!cache[key]) {
        result.push([...path]);
        cache[key] = true;
      }
      return;
    }

    const char = arr[0];

    // With capital
    backtrack(arr.slice(1), [
      ...path,
      typeof arr[0] === 'string' ? char.toUpperCase() : char
    ]);

    // Without capital
    backtrack(arr.slice(1), [...path, char]);
  };

  backtrack(str.split(''));
  return result;
};

console.log(letterCasePermutation('a1b2'));
console.log(letterCasePermutation('3z4'));

const count = s => {
  // Store total count of 0s
  let cnt = 0;

  // Count total no. of 0s
  // character in given string
  s.split('').forEach(c => {
    cnt += c === 'a' ? 1 : 0;
  });
  console.log(cnt);

  // If total count of 0
  // character is not
  // divisible by 3
  if (cnt % 3 !== 0) return 0;

  let res = 0;
  let k = cnt / 3;
  let sum = 0;

  // Initialize mp to store
  // frequency of k
  let mp = new Map();

  // Traverse string to find
  // ways to split string
  for (let i = 0; i < s.length; i++) {
    // Increment count if 0 appears
    sum += s[i] === 'a' ? 1 : 0;

    // Increment result if sum equal to
    // 2*k and k exists in mp
    if (sum === 2 * k && mp.has(k) && i < s.length - 1 && i > 0) {
      res += mp.get(k);
    }

    // Insert sum in mp
    if (mp.has(sum)) mp.set(sum, mp.get(sum) + 1);
    else mp.set(sum, 1);
  }

  // Return result
  return res;
};

// Driver Code
// Given string
let str = 'babaa';

// Function call
console.log(count(str));
