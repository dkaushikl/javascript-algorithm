var isSameTree = function(p, q) {
  if (!p && !q) return true;

  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var isSameTree = function(p, q) {
  const stack = [[p, q]];

  while (stack.length > 0) {
    const [node1, node2] = stack.pop();
    if (!node1 && !node2) continue;

    if (!node1 || !node2) return false;
    if (node1.val !== node2.val) return false;

    stack.push([node1.left, node2.left]);
    stack.push([node1.right, node2.right]);
  }

  return true;
};
