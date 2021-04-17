// Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.)

// EXAMPLE
// Input: "Mr 3ohn Smith
// Output: "Mr%203ohn%20Smith"

function urlify(s) {
  const arr = s.split(' ');
  return arr.map((x, i) => (i === arr.length - 1 ? x : x + '%20')).join('');
}

function urlify2(s) {
  let s1 = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') s1 += '%20';
    else s1 += s[i];
  }
  return s1;
}

console.log(urlify2('Mr 3ohn Smith'));
