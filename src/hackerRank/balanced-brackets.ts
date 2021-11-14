function isBalanced(s: string): string {
  let isResult = true;
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (item === '(' || item === '{' || item === '[') {
      arr.push(item);
    } else {
      const lastChar = arr[arr.length - 1];
      if (item === ']' && lastChar != '[') {
        isResult = false;
        break;
      }

      if (item === '}' && lastChar != '{') {
        isResult = false;
        break;
      }

      if (item === ')' && lastChar != '(') {
        isResult = false;
        break;
      }

      arr.pop();
    }
  }

  if (arr.length > 0) return 'NO';
  return isResult ? 'YES' : 'NO';
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

console.log(isBalanced1('{[()]}'));
console.log(isBalanced1('{[(])}'));
console.log(isBalanced('{{[[(())]]}}'));
