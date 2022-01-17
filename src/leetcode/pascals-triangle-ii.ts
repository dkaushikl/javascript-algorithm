const getRow = (n) => {
  if (n === 0) return [1];
  if (n === 1) return [1, 1];

  const helper = (target, arr = [1, 1]) => {
    const temp = [1];

    let i = 1;
    while (i < arr.length) {
      const sum = arr[i] + arr[i - 1];
      temp.push(sum);
      i++;
    }
    temp.push(1);

    if (target >= n) return temp;

    return helper(target + 1, temp);
  };

  return helper(2, [1, 1]);
};

console.log(getRow(3));
