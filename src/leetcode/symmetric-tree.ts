var isSymmetric = function(root) {
  if (!root) return true;

  let isSym = true;

  const traverse = (left, right) => {
    if (!(left.val === right.val) || !(left.val === right.val)) {
      isSym = false;
    }

    traverse(left.left, right.right);
    traverse(left.right, right.left);
  };

  if (root.left && root.right) {
    traverse(root.left, root.right);
  } else {
    return false;
  }

  return isSym;
};
