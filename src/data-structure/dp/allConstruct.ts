const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];

  if (target === '') return [[]];

  const result = [];

  for (const item of wordBank) {
    if (target.indexOf(item) === 0) {
      const suffix = target.slice(item.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map(way => [item, ...way]);
      result.push(...targetWays);
    }
  }

  memo[target] = result;
  return result;
};

// console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'ef', 'def', 'abcd']));
// console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(
  allConstruct('eeeeeeeeeeeeeeeeeeeef', [
    'ef',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
    'eeeeeee'
  ])
);
