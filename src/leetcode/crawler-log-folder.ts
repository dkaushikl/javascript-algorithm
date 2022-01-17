const minOperations = (logs) => {
  const stack = [];

  for (const item of logs) {
    if (item === './') {
      continue;
    }

    if (item === '../') {
      stack.length > 0 && stack.pop();
      continue;
    }

    stack.push(item);
  }
  console.log(stack.length);
  return stack.length;
};

minOperations(['d1/', 'd2/', '../', 'd21/', './']);
