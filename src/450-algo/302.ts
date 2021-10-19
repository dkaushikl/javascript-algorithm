const reverseString = (str: string) => {
  const result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    result.push(char);
  }
  return result.join('');
};

console.log(reverseString('Testing'));
