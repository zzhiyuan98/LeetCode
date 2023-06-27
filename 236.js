const lowestCommonAncestor = (root, p, q) => {
  /*
  仅有以下几种情况：
  1. p，q 一个位于左树，一个位于右树
  2. p 为 root，q 在子树中的一个
  3. q 为 root，p 在子树中的一个
   */
  let ans = undefined;
  const dfs = (node, p, q) => {
    if (node === null) return false;
    const left = dfs(node.left, p, q);
    const right = dfs(node.right, p, q);
    const and = left && right;
    const or = left || right;
    if (and || (or && (node === p || node === q))) ans = node;
    return left || right || node === p || node === q;
  };
  dfs(root, p, q);
  return ans;
};
