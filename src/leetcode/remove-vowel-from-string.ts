// Leetcode == 1119
// Give you a stringSPlease erase you where all the vowels ('a'，'e'，'i'，'o'，'u'), And returns the new string.

// Enter: "leetcodeisacommunityforcoders"
// Output: "ltcdscmmntyfrcdrs"

// Enter: "aeiou"
// Output: ""

// Time Complexity - o(n) = o(n)
// Space Complexity - (2 + n) = o(n)
function removeVowelFromString(s) {
  if (!s || s.length <= 0 || s === undefined) return 'Bad string';

  s = s.toLowerCase();

  let result = '';

  for (let i = 0; i < s.length; i++)
    if (
      !(
        s[i] === 'a' ||
        s[i] === 'e' ||
        s[i] === 'i' ||
        s[i] === 'o' ||
        s[i] === 'u'
      )
    )
      result += s[i];

  return result;
}

function removeVowelFromString2(s) {
  if (!s || s.length <= 0 || s === undefined) return 'Bad string';

  s = s.toLowerCase();

  let result = '';
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < s.length; i++) if (!vowels.includes(s[i])) result += s[i];

  return result;
}

function removeVowelFromString3(s) {
  if (!s || s.length <= 0 || s === undefined) return 'Bad string';

  s = s.toLowerCase();

  let result = '';
  const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };

  for (let i = 0; i < s.length; i++) if (!vowels[s[i]]) result += s[i];

  return result;
}

// console.log(removeVowelFromString('null'));
// console.log(removeVowelFromString('undefined'));
// console.log(removeVowelFromString(null));
// console.log(removeVowelFromString(undefined));
// console.log(removeVowelFromString('123456'));
console.log(removeVowelFromString3('leetcodeisacommunityforcoders'));
// console.log(removeVowelFromString('aeiou'));
