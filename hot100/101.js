/*
101. 对称二叉树

给你一个二叉树的根节点 root， 检查它是否轴对称。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const isSymmetric = root => {
  if (!root) {
    return true;
  }
  const dfs = (left, right) => {
    if (!left && !right) {
      return true;
    }
    if (!left ||!right) {
      return false;
    }
    return left.val === right.val && dfs(left.left, right.right) && dfs(left.right, right.left);
  };
  return dfs(root.left, root.right);
};
