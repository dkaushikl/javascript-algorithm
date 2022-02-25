var isSumEqual = function(firstWord, secondWord, targetWord) {
  let map = {};

  for (let i = 0; i < 10; i++) {
    map[String.fromCharCode(97 + i)] = i;
  }

  let firstSum = '';
  for (const item of firstWord) {
    firstSum += map[item];
  }

  let secondSum = '';
  for (const item of secondWord) {
    secondSum += map[item];
  }

  let targetSum = '';
  for (const item of targetWord) {
    targetSum += map[item];
  }
  return Number(firstSum) + Number(secondSum) === Number(targetSum);
};

console.log(isSumEqual('acb', 'cba', 'cdb'));
