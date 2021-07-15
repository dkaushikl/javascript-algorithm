// Problem 3
//
// This problem was asked by Google
//
// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string,
// and deserialize(s), which deserializes the string back into the tree.
//
// For example, given the following Node class
//
// class TreeNode {
// constructor(val, left = null, right = null) {
//   this.val = val;
//   this.left = left;
//   this.right = right;
// }
// }
//
// const node = new TreeNode(
//   'root',
//   new TreeNode('left', new TreeNode('left.left'), new TreeNode('right'))
// );
// expect(deserialize(serialize(node)).left.left.val).toEqual('left.left'); // Jest Testing
//
// https://leetcode.com/problems/serialize-and-deserialize-bst/
//
// Both serialize and deserialize functions:
// O(N) Time Complexity
// O(N) Space Complexity
// N is the number of nodes in the tree

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function serialize(root) {
  let list = [];

  const trav = root => {
    if (root === null) return list.push('#');

    list.push(root.val);
    trav(root.left);
    trav(root.right);
  };

  trav(root);
  return list.join(',');
}

function deserialize(data) {
  const trav = list => {
    const firstVal = list.shift();
    if (firstVal === '#') return null;

    let node = new TreeNode(firstVal);
    node.left = trav(list);
    node.right = trav(list);
    return node;
  };

  return trav(data.split(','));
}

const node = new TreeNode(
  'root',
  new TreeNode('left', new TreeNode('left.left'), new TreeNode('right'))
);

console.log(deserialize(serialize(node)));
