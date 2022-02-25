var letterCombinations = function(digits) {
  let map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  let stack = [];
  for (let i = 0; i < digits.length; i++) {
    stack.push(map[digits[i]]);
  }

  let finalArr = [];
  const dfs = (stack, str) => {
    if (stack.length === 0) return;

    let arr = stack.shift();
    for (let i = 0; i < arr.length; i++) {
      if (stack.length === 0) {
        finalArr.push(str + arr[i]);
      } else {
        str += arr[i];
        dfs([...stack], str);
        str = str.substring(0, str.length - 1);
      }
    }
  };

  dfs(stack, '');
  return finalArr;
};

console.log(letterCombinations('234'));
