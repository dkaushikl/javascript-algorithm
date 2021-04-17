// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, si and s2, write code to check if s2 is a rotation of si using only one call to isSubstring [e.g., "water bottle " is a rotation of 'erbottlewat"),

function stringRotation(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  return (s2 + s2).includes(s1);
}

function stringRotation1(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  let string = '';
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(string + s1[i])) string += s1[i];
    else break;
  }

  let strArr = s1.split(string);
  let secondStr = strArr[1];

  return secondStr + string === s2;
}

console.log(stringRotation1('waterbottle', 'bottlewater'));
