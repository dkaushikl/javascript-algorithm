const reverseString = (arr) => {
  let i = 0;
  while (i < arr.length / 2) {
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    i++;
  }
  console.log(arr);
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));
