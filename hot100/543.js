/*
543. 二叉树的直径

给你一棵二叉树的根节点，返回该树的直径。

二叉树的直径是指树中任意两个节点之间最长路径的长度。这条路径可能经过也可能不经过根节点 root。

两节点之间路径的长度由它们之间边数表示。
 */

var diameterOfBinaryTree = function(root) {
  let max = 0;
  const dfs = node => {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  };
  dfs(root);
  return max;
};
