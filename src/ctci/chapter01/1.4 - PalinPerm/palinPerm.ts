// Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words

// EXAMPLE
// Input: Tac t Coa
// Output: Tru e (permutations : "tac o cat" , "atc o eta" , etc. )

function replaceChar(origString, replaceChar, index) {
  let firstPart = origString.substr(0, index);
  let lastPart = origString.substr(index + 1);

  let newString = firstPart + replaceChar + lastPart;
  return newString;
}

function allPermutation(s) {
  let arr = [];
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= s.length; j++) {
      if (i === j) continue;
      const newString = replaceChar(s, s[i - 1], j - 1);
      const finalString = replaceChar(newString, s[j - 1], i - 1);
      const reverseString = finalString
        .split('')
        .reverse()
        .join('');

      console.log(finalString, reverseString);

      if (finalString === reverseString) arr.push(finalString);
    }
  }

  return arr;
}

function palinPerm(s) {
  console.log(allPermutation(s.replace(' ', '').toLowerCase()));
}

console.log(palinPerm('Tact Coa'));
