var commonChars = function(words) {
  let map = {};
  for (let i = 0; i < words[0].length; i++) {
    map[words[0][i]] = map[words[0][i]] ? Number(map[words[0][i]]) + 1 : 1;
  }

  let i = 1;
  let result = {};
  while (i < words.length) {
    i++;
  }
};

console.log(commonChars(['bella', 'label', 'roller']));
// console.log(commonChars(['cow', 'wo', 'opww']));
