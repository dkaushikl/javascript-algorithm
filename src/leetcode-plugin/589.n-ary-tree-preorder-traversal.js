/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorderDFS = function(root) {
  const result = [];

  const dfs = node => {
    if (!node) return;

    result.push(node.val);

    for (let i = 0; i < node.children.length; i++) dfs(node.children[i]);
  };

  dfs(root);
  return result;
};

var preorderBFS = function(root) {
  const result = [];

  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    if (!node) continue;
    result.push(node.val);
    for (let i = node.children.length - 1; i >= 0; i--)
      stack.push(node.children[i]);
  }

  return result;
};
// @lc code=end
