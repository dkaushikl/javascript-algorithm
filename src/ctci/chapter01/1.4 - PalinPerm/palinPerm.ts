// Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words

// EXAMPLE
// Input: Tac t Coa
// Output: Tru e (permutations : "tac o cat" , "atc o eta" , etc. )

const palinPerm = s => {
  s = s.replace(' ', '').toLowerCase();

  if (s.length % 2 === 0) return false;

  const map = new Map();

  for (const item of s) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  let mullican = false;

  for (const item of map) {
    if (item[1] % 2 !== 0) {
      if (mullican) return false;

      mullican = true;
    }
  }

  return true;
};

console.log(palinPerm('Tactcac'));
