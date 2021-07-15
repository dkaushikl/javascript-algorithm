/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^numDecodings" }] */

// Problem 7
//
// This problem was asked by Facebook.
//
// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message,
// count the number of ways it can be decoded.
//
// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
//
// You can assume that the messages are decodable. For example, '001' is not allowed.
//
// https://leetcode.com/problems/decode-ways/
//
// O(N) Time complexity
// O(1) Space complexity
// N is the length of the message

function solution(s) {
  const dp = Array(s.length + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= s.length; i++) {
    const oneChar = +s.slice(i - 1, i);
    const twoChar = +s.slice(i - 2, i);
    if (oneChar > 0) dp[i] = dp[i - 1];
    if (twoChar >= 10 && twoChar <= 26) dp[i] += dp[i - 2];
  }
  console.log(dp);
  return dp[s.length];
}

solution('226');
// 2 2 6        22 6         2 26

function Fibber() {
  this.memo = {};
}

Fibber.prototype.fib = function(n) {
  if (n === 0 || n === 1) return n;
  if (this.memo[n]) return this.memo[n];

  this.memo[n] = this.fib(n - 2) + this.fib(n - 1);
  return this.memo[n];
};

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var isUnivalTree = function(root, value = root.val) {
  if (!root) {
    return true;
  }

  if (root.val !== value) {
    return false;
  }

  return isUnivalTree(root.left, value) && isUnivalTree(root.right, value);
};

const node = new TreeNode(
  '2',
  new TreeNode('2', new TreeNode('5'), new TreeNode('2')),
  new TreeNode('2', new TreeNode('2'))
);

console.log(isUnivalTree(node, '2'));
