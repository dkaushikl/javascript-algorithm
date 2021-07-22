/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^countUnivalSubtrees" }] */

// Problem 8
//
// This problem was asked by Google.
//
// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.
//
// Given the root to a binary tree, count the number of unival subtrees.
//
// For example, the following tree has 5 unival subtrees:
//
//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \
//  1   1
//
// https://www.dailycodingproblem.com/blog/unival-trees/
//
// O(N) Time complexity
// O(N) Space complexity
// N is the number of nodes in the tree

function countUnivalSubtreesF(root) {
  const res = [0];
  countUnivalSubtreesFHelper(root, res);
  return res[0];
}

function countUnivalSubtrees(root) {
  return countUnivalSubtreesF(root);
}

function countUnivalSubtreesS(root) {
  if (root === null) return 0;
  const leftCount = countUnivalSubtrees(root.left);
  const rightCount = countUnivalSubtrees(root.right);

  if (isUnival(root)) return 1 + leftCount + rightCount;
  return leftCount + rightCount;
}

// const node = new TreeNode(
//   '2',
//   new TreeNode('2', new TreeNode('5'), new TreeNode('2')),
//   new TreeNode('2', new TreeNode('2'))
// );

// const node = new TreeNode(0);
// node.left = new TreeNode(1);
// node.right = new TreeNode(0);
// node.right.left = new TreeNode(1);
// node.right.right = new TreeNode(0);
// node.right.left.left = new TreeNode(1);
// node.right.left.right = new TreeNode(1);
