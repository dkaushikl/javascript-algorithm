const removeDuplicates = (value: string) => {
  const stack = [];

  for (const char of value)
    char === stack[stack.length - 1] ? stack.pop() : stack.push(char);

  return stack.join('');
};

removeDuplicates('abbaca');
