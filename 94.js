var inorderTraversal = function(root) {
  const res = [];
  const dfs = node => {
    if (!node) return;
    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  return res;
};
