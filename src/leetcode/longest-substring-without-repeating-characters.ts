const lengthOfLongestSubstring = (s) => {
  let maxLen = 0;
  let currentStr = '';

  for (const item of s) {
    const idx = currentStr.indexOf(item);

    if (idx >= 0) currentStr = currentStr.slice(idx + 1);

    currentStr += item;
    maxLen = Math.max(maxLen, currentStr.length);
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
