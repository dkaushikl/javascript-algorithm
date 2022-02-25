const removeKdigits = (string, k) => {
  const split = string.split('');

  let stack = [];
  for (let i = 0; i < split.length; i++) {
    while (k > 0 && stack[stack.length - 1] > split[i]) {
      stack.pop();
      k--;
    }

    stack.push(split[i]);
  }

  // if k is greater than zero than we have to pop out value.
  while (k-- > 0) stack.pop();

  // if first char is 0 then remove it
  while (stack[0] === '0' && stack.length > 0) stack.shift();
  return stack.join('') || '0';
};

console.log(removeKdigits('1432219', 3));
console.log(removeKdigits('10200', 1));
console.log(removeKdigits('00001', 1));
console.log(removeKdigits('10', 2));
console.log(removeKdigits('1234567890', 9));
