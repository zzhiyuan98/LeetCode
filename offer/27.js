var mirrorTree = function(root) {
  if (!root) {
    return null;
  }
  const node = new TreeNode(root.val);
  node.right = mirrorTree(root.left);
  node.left = mirrorTree(root.right);
  return node;
};
