var replaceDigits = function(s) {
  let arr = s.split('');
  for (let i = 0; i < s.length; i += 2) {
    if (arr[i + 1])
      arr[i + 1] = String.fromCharCode(s[i].charCodeAt() + Number(s[i + 1]));
  }
  return arr.join('');
};

// console.log(replaceDigits('a1c1e1'));
console.log(replaceDigits('a1b2c3d4e'));
