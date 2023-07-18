var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  const res = [];
  const queue = [];
  queue.push(root);
  while (queue.length) {
    let size = queue.length;
    while (size--) {
      const node = queue.shift();
      res.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return res;
};
