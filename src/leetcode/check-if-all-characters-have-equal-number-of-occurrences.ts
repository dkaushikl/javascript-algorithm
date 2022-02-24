var areOccurrencesEqual = function(s) {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
  }

  let previousVal;

  for (const item in map) {
    if (previousVal && map[item] !== previousVal) {
      return false;
    } else if (!previousVal) {
      previousVal = map[item];
    }
  }

  return true;
};

console.log(areOccurrencesEqual('abacbc'));
