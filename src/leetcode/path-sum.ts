var hasPathSum = function(root, targetSum) {
  if (!root) return false;

  let isAvailable = false;
  const traverse = (root, sum) => {
    if (sum === targetSum) {
      isAvailable = true;
    }

    if (!root) return;

    traverse(root.left, sum + root.val);
    traverse(root.right, sum + root.val);
  };

  traverse(root, 0);
  return isAvailable;
};
