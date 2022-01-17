const isValid = s => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const lastItem = stack[stack.length - 1];
    const currentItem = s[i];
    if (lastItem === '(' && currentItem === ')') {
      stack.pop();
    } else if (lastItem === '[' && currentItem === ']') {
      stack.pop();
    } else if (lastItem === '{' && currentItem === '}') {
      stack.pop();
    } else {
      stack.push(currentItem);
    }
  }

  return stack.length > 0 ? false : true;
};

console.log(isValid('()'));
