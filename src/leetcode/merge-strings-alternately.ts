var mergeAlternately = function(word1, word2) {
  let i = 0;
  let j = 0;
  let str = '';
  while (i < word1.length && j < word2.length) {
    if (i === j) {
      str += word1[i];
      i++;
    } else {
      str += word2[j];
      j++;
    }
  }

  while (i < word1.length) {
    str += word1[i];
    i++;
  }

  while (j < word2.length) {
    str += word2[j];
    j++;
  }

  return str;
};

console.log(mergeAlternately('abc', 'pqr'));
console.log(mergeAlternately('ab', 'pqrs'));
console.log(mergeAlternately('abcd', 'pq'));
