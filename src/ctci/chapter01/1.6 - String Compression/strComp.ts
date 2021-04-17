// Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3, If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z)

function strComp(s) {
  let result = '';
  let oldValue = '',
    count = 0;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 === s.length) {
      count++;
      result += oldValue + count;
      break;
    }

    if (oldValue === s[i]) {
      count++;
    } else {
      if (oldValue != '' && i !== 0) {
        result += count === 1 ? oldValue : oldValue + count;
      }

      count = 1;
      oldValue = s[i];
    }
  }

  return result;
}

function strComp1(string) {
  var compressed = '';
  var currChar = '';
  var currCount = '';
  var maxCount = 1;
  for (var i = 0; i < string.length; i++) {
    if (currChar !== string[i]) {
      compressed = compressed + currChar + currCount;
      maxCount = Math.max(maxCount, currCount);
      currChar = string[i];
      currCount = 1;
    } else {
      currCount++;
    }
  }
  compressed = compressed + currChar + currCount;
  maxCount = Math.max(maxCount, currCount);

  return maxCount === 1 ? string : compressed;
}

console.log(strComp1('aabcccccaaa'));
// console.log(strComp1("aabbccc"));
// console.log(strComp1("abbbbbbbbbbbb"));
// console.log(strComp1("aaabbaa"));
