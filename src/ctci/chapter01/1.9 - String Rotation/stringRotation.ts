// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, si and s2, write code to check if s2 is a rotation of si using only one call to isSubstring [e.g., "water bottle " is a rotation of 'erbottlewat"),

const stringRotation = (s1: string, s2: string) => {
  return (s2 + s2).includes(s1);
};

console.log(stringRotation('waterbottle', 'bottlewater'));
