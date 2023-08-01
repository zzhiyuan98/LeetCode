/*
226. 翻转二叉树

给你一棵二叉树的根节点 root，翻转这棵二叉树，并返回其根节点。
 */

var invertTree = function(root) {
  if (!root) return null;
  const left = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(left);
  return root;
};
