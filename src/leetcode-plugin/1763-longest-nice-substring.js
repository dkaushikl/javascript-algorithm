var longestNiceSubstring = function(s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    let substr = [s[i]];
    for (let j = i + 1; j < s.length; j++) {
      substr.push(s[j]);
      let nicestr = true;

      for (const c of substr) {
        if (
          !substr.includes(c.toLowerCase()) ||
          !substr.includes(c.toUpperCase())
        ) {
          nicestr = false;
        }
      }

      if (nicestr && substr.join('').length > result.length) {
        result = substr.join('');
      }
    }
  }
  return result;
};

// var startTime = performance.now()
// console.log(longestNiceSubstring('BazbZABAC'));
// var endTime = performance.now()
// console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

console.log(longestNiceSubstring('aaA'));
console.log(longestNiceSubstring('abA'));
console.log(longestNiceSubstring('abAB'));
console.log(longestNiceSubstring('abcABC'));
console.log(longestNiceSubstring('abcBCA'));
console.log(longestNiceSubstring('aBCAbc'));
console.log(longestNiceSubstring('YazaAaY'));
console.log(longestNiceSubstring('Bb'));
console.log(longestNiceSubstring('c'));
