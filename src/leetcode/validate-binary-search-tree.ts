const isValidBST = (root) => {
  const traverse = (root, min = null, max = null) => {
    if (!root) return true;

    if (
      (min !== null && root.val <= min) ||
      (max !== null && root.val >= max)
    ) {
      return false;
    }

    return traverse(root.left, min, root.val) && traverse(root.right);
  };

  return traverse(root);
};
