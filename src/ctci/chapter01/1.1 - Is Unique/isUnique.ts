// Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?

function allUniqueChars1(s) {
  for (let i = 0; i < s.length - 1; i++) {
    for (const j = i + 1; j < s.length; i++) {
      if (s[i] === s[j]) return false;
    }
  }

  return true;
}

function allUniqueChars2(s) {
  const arr = s
    .toLowerCase()
    .split('')
    .sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return false;
  }

  return true;
}

function allUniqueChars3(s) {
  const charArr = [...Array(255)].map((_, i) => {
    i: false;
  });

  for (let i = 0; i < charArr.length; i++) {
    charArr[i] = false;
  }

  for (let i = 0; i < s.length; i++) {
    const a = s[i].charCodeAt(0);

    if (charArr[a]) return false;

    charArr[a] = true;
  }

  return true;
}
