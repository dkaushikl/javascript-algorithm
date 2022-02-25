var longestValidParentheses = function(s) {
  let max = 0;
  let stack = [-1];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (!stack.length) {
        stack.push(i);
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }
  return max;
};

// Four test cases to run function on
console.log(longestValidParentheses('()(()')); // 2
// console.log(longestValidParentheses("(()")) // 2
// console.log(longestValidParentheses(")()())")) // 4
// console.log(longestValidParentheses("(((())))")) // 4
// console.log(longestValidParentheses("()(")) // 4
// console.log(longestValidParentheses("")) // 0
