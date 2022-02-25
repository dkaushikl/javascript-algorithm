const levelOrder = root => {
  if (!root) return [];
  const queue = [[root, 0]];
  const result = [];

  while (queue.length > 0) {
    const [node, level] = queue.shift();
    if (!node) return;

    if (!result[level]) result[level] = [];

    result[level].push(node.val);

    if (node.children && node.children.length > 0) {
      for (const item of node.children) {
        queue.push([item, level + 1]);
      }
    }
  }

  return result;
};
