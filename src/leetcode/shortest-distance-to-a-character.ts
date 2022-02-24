var shortestToChar = function(s, c) {
  let findIndex = s.indexOf(c);
  let ans = new Array(s.length).fill('');

  for (let i = 0; i < s.length; i++) {
    ans[i] = Math.abs(findIndex - i);
  }
  return ans;
  console.log();
};

console.log(shortestToChar('loveleetcode', 'e'));
