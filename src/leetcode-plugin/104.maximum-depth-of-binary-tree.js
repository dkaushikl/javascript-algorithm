/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
var maxDepth = function(root) {
  if (!root) return 0;
  let maxLen = 0;

  function traverse(root, length) {
    maxLen = Math.max(maxLen, length);

    if (root.left) {
      traverse(root.left, length + 1);
    }

    if (root.right) {
      traverse(root.right, length + 1);
    }
  }

  traverse(root, 1);
  return maxLen;
};
// @lc code=end
