const reverseWords = (s) => {
  const arr = s.split(' ');
  let arrLength = 0;

  while (arrLength < arr.length) {
    arr[arrLength] = arr[arrLength]
      .split('')
      .reverse()
      .join('');
    arrLength++;
  }

  return arr.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));
