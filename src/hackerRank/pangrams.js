function pangrams(s) {
  const arr = new Array(26).fill(false);
  s = s.toLowerCase();

  for (let char of s) {
    const code = char.charCodeAt();
    if (code >= 97 && code <= 122) {
      const num = code - 97;
      arr[num] = true;
    }
  }

  return arr.every(x => x === true) ? 'pangram' : 'not pangram';
}

console.log(
  pangrams('We promptly judged antique ivory buckles for the next prize')
);
