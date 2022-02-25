var getLucky = function(s, k) {
  let map = {};
  let count = 1;
  for (let i = 97; i <= 97 + 25; i++) {
    map[String.fromCharCode(`${i}`)] = count;
    count++;
  }

  let str = '';
  for (let i = 0; i < s.length; i++) {
    str += map[s[i]];
  }

  let sum = 0;
  let j = 0;
  while (k > 0) {
    sum += parseInt(str[j]);
    if (j === str.length - 1) {
      str = String(sum);
      sum = 0;
      j = 0;
      k--;
    } else {
      j++;
    }
  }

  return str;
};

console.log(getLucky('iiii', 1));
console.log(getLucky('leetcode', 2));
console.log(getLucky('zbax', 2));
