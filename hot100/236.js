/*
236. 二叉树的最近公共祖先

给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 */

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
