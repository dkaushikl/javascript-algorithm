const checkRecord = (s: string): boolean => {
  let abSentCount = 0;
  let previousChar = '';
  let charBeforePreviousChar = '';
  for (let key = 0; key < s.length; key++) {
    const char = s[key];
    if (char === 'A') abSentCount++;
    if (abSentCount === 2) return false;

    if (previousChar === 'L' && charBeforePreviousChar === 'L' && char === 'L')
      return false;

    if (key >= 2) {
      charBeforePreviousChar = previousChar;
      previousChar = char;
    } else if (key === 1) {
      previousChar = char;
    } else {
      charBeforePreviousChar = char;
    }
  }

  return true;
};

console.log(checkRecord('PPALLP'));
