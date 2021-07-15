// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away.

// EXAMPLE
// pale, pie - > true
// pales, pale - > true
// pale, bale - > true
// pale, bake - > false

const oneMissing = (s1: string, s2: string) => {
  if (s1.length - 1 !== s2.length) return false;

  let mullican = false;
  let fp = 0;
  let sp = 0;

  while (fp < s1.length) {
    if (s1[fp] !== s2[sp]) {
      if (mullican) return false;
      mullican = true;
      fp++;
    } else {
      fp++;
      sp++;
    }
  }

  return true;
};

const oneReplace = (s1: string, s2: string) => {
  if (s1.length !== s2.length) return false;

  let mullican = false;
  let fp = 0;
  let sp = 0;

  while (fp < s1.length) {
    if (s1[fp] !== s2[sp]) {
      if (mullican) return false;
      mullican = true;
      fp++;
      sp++;
    } else {
      fp++;
      sp++;
    }
  }

  return true;
};

const oneAway = (s1: string, s2: string) => {
  return oneMissing(s1, s2) || oneReplace(s1, s2);
};

// console.log(oneAway('pale', 'pal'));
console.log(oneAway('pale', 'bale'));
console.log(oneAway('pale', 'bake'));
