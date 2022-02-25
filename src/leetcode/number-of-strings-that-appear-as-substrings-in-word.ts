var numOfStrings = function(patterns, word) {
  let result = 0;

  for (let char of patterns) {
    if (word.includes(char)) {
      result++;
    } else {
      result += 0;
    }
  }

  return result;
};

console.log(numOfStrings(['a', 'abc', 'bc', 'd'], 'abc'));
console.log(numOfStrings(['cjevwg'], 'jevwg'));
