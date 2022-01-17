const longestNiceSubstring = (s) => {
  s = s.split('');
  const N = s.length;
  let max = '';

  for (let i = 0; i < N - 1; i++) {
    const substr = [s[i]];

    for (let j = i + 1; j < N; j++) {
      substr.push(s[j]);
      let isNice = true;

      for (const c of substr) {
        if (
          !substr.includes(c.toLowerCase()) ||
          !substr.includes(c.toUpperCase())
        ) {
          isNice = false;
        }
      }

      if (isNice && substr.join('').length > max.length) {
        max = substr.join('');
        console.log(max);
      }
    }
  }

  return max;
};

console.log(longestNiceSubstring('ABC'));
console.log(longestNiceSubstring('BebjJE'));
console.log(longestNiceSubstring('YazaAa'));
console.log(longestNiceSubstring('cCh'));
console.log(longestNiceSubstring('cChH'));
console.log(longestNiceSubstring('Bb'));
console.log(longestNiceSubstring('c'));
console.log(longestNiceSubstring('dDzeE'));
console.log(longestNiceSubstring('v'));
console.log(longestNiceSubstring('vVv'));
