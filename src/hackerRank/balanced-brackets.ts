function isBalanced(s: string): string {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] === ')' && stack[stack.length - 1] === '(') ||
      (s[i] === '}' && stack[stack.length - 1] === '{') ||
      (s[i] === ']' && stack[stack.length - 1] === '[')
    ) {
      stack.pop();
    } else if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      return 'NO';
    }
  }

  return stack.length > 0 ? 'NO' : 'YES';
}

function isBalanced1(s: string): string {
  const map = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (map[item]) {
      stack.push(item);
    } else if (item !== map[stack.pop()]) {
      return 'NO';
    }
  }

  return stack.length > 0 ? 'NO' : 'YES';
}

console.log(isBalanced('{[()]}'));
console.log(isBalanced('{[(])}'));
console.log(isBalanced('{{[[(())]]}}'));
