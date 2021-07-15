const makeGood = (s: string) => {
  const stack = [];

  for (const item of s) {
    const top = stack[stack.length - 1];
    if (
      stack.length > 0 &&
      item === item.toUpperCase() &&
      top === top.toLowerCase() &&
      top.toLowerCase() === item.toLowerCase()
    ) {
      stack.pop();
      continue;
    }

    if (
      stack.length > 0 &&
      item === item.toLowerCase() &&
      top === top.toUpperCase() &&
      top.toLowerCase() === item.toLowerCase()
    ) {
      stack.pop();
      continue;
    }

    stack.push(item);
  }

  return stack.join('');
};

makeGood('leEeetcode');
makeGood('Pp');
