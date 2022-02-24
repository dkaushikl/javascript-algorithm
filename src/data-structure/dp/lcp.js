const lcp = (s1 = 'abcdgh', s2 = 'aedfhr') => {
  const map = {};

  const backtrack = (arr, idx) => {
    if (idx)
      for (let i = idx; i < arr.length; i++) {
        backtrack(arr, i + 1);
      }
  };

  backtrack(s1.split(''), 0);
};

console.log(lcp());
