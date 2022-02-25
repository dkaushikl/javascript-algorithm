// 28. Implement strStr()
// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// bruteforce way
// to go over character by character
// check character is matched with the first character of needle
// start new forloop to compare further string and match with entire needle
// string compare thoroughly then just return to index i which is our starting point
// return -1; which shows string does not include text which is given

// KMP Algorithm
var strStr2 = function(haystack, needle) {};

// Four test cases to run function on
// console.log(strStr2("aaa", "aaaa")) // -1
// console.log(strStr2("hello", "ll")) // 2
console.log(strStr2('hellllo', 'llll')); // 2
// console.log(strStr2("aaaaa", "bba")) // -1
// console.log(strStr2("", "")) // 0

var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};

var strStr1 = function(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let needleIndex = 1;
      for (let j = i + 1; j < haystack.length; j++) {
        if (haystack[j] === needle[needleIndex]) {
          if (needleIndex === needle.length - 1) return i;
          needleIndex += 1;
        } else {
          break;
        }
      }
    }
  }
  return -1;
};
