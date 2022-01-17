const BaseBallGame = (target: string[]) => {
  const stack = [];

  for (const char of target) {
    if (char === 'C') stack.pop();
    else if (char === 'D') stack.push(+stack[stack.length - 1] * 2);
    else if (char === '+')
      stack.push(+stack[stack.length - 2] + +stack[stack.length - 1]);
    else stack.push(+char);
  }

  return stack.reduce((a, b) => b + a, 0);
};

BaseBallGame(['5', '2', 'C', 'D', '+']);
BaseBallGame(['5', '-2', '4', 'C', 'D', '9', '+', '+']);
BaseBallGame(['1']);
