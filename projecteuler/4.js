const ReverseString = require('../reversestring/index.js');
const Utills = require('../utills/index.js');

('use strict');
function largestPalindrome(n) {
  var number = -1;
  for (var i = n; i > 100; i--) {
    for (var j = n; j > 100; j--) {
      if (isPalindrome(j * i)) {
        number = number > j * i ? number : j * i;
      }
    }
  }
  console.log(number);
}

function isPalindrome(arg) {
  arg = arg.toString();
  if (!Utills.CheckStringEmpty(arg)) {
    return '';
  }

  // remove symbol by below regular expression
  const re = /[^A-Za-z0-9]/g;
  const lowRegStr = arg
    .toString()
    .toLowerCase()
    .replace(re, '');
  const reverseStr = ReverseString.One(lowRegStr);
  return reverseStr === lowRegStr;
}

largestPalindrome(999);
