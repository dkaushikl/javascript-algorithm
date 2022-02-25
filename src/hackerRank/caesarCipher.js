const caesarCipher = (s, k) => {
  if (s === '' || k <= 1) return s;

  let alphabets = [];
  let minVal = 97;
  alphabets.push('-');

  // it checks whether given k is more than alphabet number
  // if yes then we will devide k by 26 so it will give result between 1-26
  k = k > 26 ? k % 26 : k;

  for (let i = 97; i <= 97 + 25; i++) {
    if (i + k > 122) {
      alphabets.push(String.fromCharCode(minVal));
      minVal++;
    } else {
      alphabets.push(String.fromCharCode(i + k));
    }
  }

  let str = '';
  for (const char of s) {
    let smallChar = String(char.toLowerCase());
    let code = smallChar.charCodeAt();

    if (code >= 97 && code <= 122) {
      let newChar = alphabets[code - 97 + 1];
      if (char === char.toUpperCase()) {
        newChar = newChar.toUpperCase();
      }
      str += newChar;
    } else {
      str += smallChar;
    }
  }
  return str;
};

console.log(caesarCipher('There-s-a-starman-waiting-in-the-sky', 3));
console.log(caesarCipher('Kaushik-dhameliya', 3));
console.log(caesarCipher('', 3));
console.log(caesarCipher('Kaushik Dhameliya', 0));
console.log(caesarCipher('Kaushik-Dhameliya', 1));
console.log(caesarCipher('www.abc.xy', 9));
