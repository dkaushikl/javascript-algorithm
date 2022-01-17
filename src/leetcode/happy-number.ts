let isHappy = (n, counter = 0, map = {}) => {
  counter++;
  if (map[n]) return isHappy(map[n], counter, map);

  const str = n.toString();
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += Math.pow(str[i], 2);
  }

  if (sum === 1) {
    return true;
  }

  map[n] = sum;

  if (counter === 8) return false;
  return isHappy(sum, counter, map);
};

console.log(isHappy(19));
console.log(isHappy(17));
console.log(isHappy(2));
