const detectCapitalUse = word => {
  let allCaps = true;
  let firstCaps = true;
  let allSmalls = true;

  for (let i = 0; i < word.length; i++) {
    if (
      word[i] >= String.fromCharCode(65) &&
      word[i] <= String.fromCharCode(91)
    ) {
      if (i === 0) {
        firstCaps = true;
      } else {
        allSmalls = false;
      }
    } else {
      allCaps = false;
    }
  }

  return allCaps || allSmalls;
};

// console.log(detectCapitalUse('YES'));
// console.log(detectCapitalUse('Yes'));
// console.log(detectCapitalUse('yes'));
// console.log(detectCapitalUse('yesS'));
// console.log(detectCapitalUse('YSs'));
