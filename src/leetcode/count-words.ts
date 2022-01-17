var countWords = function(words1, words2) {
  let map = {};
  let deletedMap = {};
  let firstLength = 0;
  for (let word of words1) {
    if (map[word]) {
      delete map[word];
      deletedMap[word] = 1;
      firstLength--;
    } else {
      if (!deletedMap[word]) {
        map[word] = 1;
        firstLength++;
      }
    }
  }

  let map2 = {};
  let secondLength = 0;
  deletedMap = {};
  for (let word of words2) {
    if (map2[word]) {
      delete map2[word];
      deletedMap[word] = 1;
      secondLength--;
    } else {
      if (!deletedMap[word] && map[word]) {
        map2[word] = 1;
        secondLength++;
      }
    }
  }
  return Math.min(firstLength, secondLength);
};

console.log(countWords(['a', 'ab'], ['a', 'a', 'a', 'ab']));
console.log(
  countWords(
    ['leetcode', 'is', 'amazing', 'as', 'is'],
    ['amazing', 'leetcode', 'is']
  )
);
console.log(countWords(['b', 'bb', 'bbb'], ['a', 'aa', 'aaa']));
