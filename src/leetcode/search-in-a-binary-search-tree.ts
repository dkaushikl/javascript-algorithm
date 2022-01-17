var searchBST = function(root, val) {
  let trees = null;
  const traverse = head => {
    if (!head) return;

    if (head.val === val) {
      trees = head;
    }

    if (head.left) traverse(head.left);
    if (head.right) traverse(head.right);
  };

  traverse(root);
  return trees;
};

let trees = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: null,
    right: null
  }
};
console.log(searchBST(trees, 2));
