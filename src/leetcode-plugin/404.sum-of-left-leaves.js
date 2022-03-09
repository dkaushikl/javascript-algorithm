/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let sum = 0;
  const dfs = (node, type = 1) => {
    if (!node) return;

    if (type === 0) {
      if (!node.left && !node.right) sum += node.val;
    }

    if (node.left) dfs(node.left, 0);

    if (node.right) dfs(node.right, 1);
  };

  dfs(root, 1);
  return sum;
};
// @lc code=end
