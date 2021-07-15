// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

var canConstruct = function(ransomNote, magazine) {
  const ransomData = {};
  for (const rn of ransomNote) {
    if (ransomData.hasOwnProperty(rn)) {
      ransomData[rn] = ransomData[rn] + 1;
    } else {
      ransomData[rn] = 1;
    }
  }

  for (const m of magazine) {
    if (ransomData.hasOwnProperty(m)) {
      ransomData[m] = ransomData[m] - 1;
    }
  }

  if (Object.keys(ransomData).length === 0) {
    return true;
  }

  let count = 0;
  Object.keys(ransomData).forEach(element => {
    if (ransomData[element] > 0) {
      count++;
    }
  });
  return count === 0 ? true : false;
};

// after optimising code same method
var canConstruct = function(ransomNote, magazine) {
  let ransomData = ransomNote.split('').reduce((ransomData, rn) => {
    ransomData[rn] = ransomData.hasOwnProperty(rn) ? ransomData[rn] + 1 : 1;
    return ransomData;
  }, {});

  ransomData = magazine.split('').reduce((ransomData, m) => {
    if (ransomData.hasOwnProperty(m)) {
      ransomData[m] = ransomData[m] - 1;
    }
    return ransomData;
  }, ransomData);

  if (Object.keys(ransomData).length === 0) {
    return true;
  }

  const lenght = Object.keys(ransomData).filter(a => ransomData[a] > 0).length;
  return length > 0 ? true : false;
};

// use filter instead of reduce to eliminate space
var canConstruct = function(ransomNote, magazine) {
  let ransomData = ransomNote.split('').reduce((ransomData, rn) => {
    ransomData[rn] = ransomData.hasOwnProperty(rn) ? ransomData[rn] + 1 : 1;
    return ransomData;
  }, {});

  ransomData = magazine.split('').reduce((ransomData, m) => {
    if (ransomData.hasOwnProperty(m)) {
      ransomData[m] = ransomData[m] - 1;
    }
    return ransomData;
  }, ransomData);

  if (Object.keys(ransomData).length === 0) {
    return true;
  }

  return Object.keys(ransomData).filter(a => ransomData[a] > 0).length > 0
    ? false
    : true;
};

canConstruct('AaabBacDDdDSC', 'AaabBacDDdDSC');

// const data  = [
//     {a: 1},
//     {b: 2}
// ]

// const data = {
//     a: 1,
//     b: 2,
// }
