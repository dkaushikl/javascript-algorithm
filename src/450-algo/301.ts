const parenthesisChecker = (str: string) => {
  if (str.length <= 0) return true;

  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === ']' && stack.pop() !== '[') return false;

    if (char === '}' && stack.pop() !== '{') return false;

    if (char === ')' && stack.pop() !== '(') return false;

    if (char !== ']' && char !== '}' && char !== ')') stack.push(char);
  }

  return stack.length > 0 ? false : true;
};

console.log(parenthesisChecker('{([])}'));
console.log(parenthesisChecker(''));
console.log(parenthesisChecker('([]'));
