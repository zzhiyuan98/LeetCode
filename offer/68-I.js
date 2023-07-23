var lowestCommonAncestor = function(root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};

var lowestCommonAncestor1 = function(root, p, q) {
  let ans = null;
  const dfs = node => {
    if (!node) {
      return false;
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    const and = left && right;
    const or = left || right;
    if (and || (or && p === node) || (or && q === node)) {
      ans = node;
    }
    return or || node === p || node === q;
  };
  dfs(root);
  return ans;
};
