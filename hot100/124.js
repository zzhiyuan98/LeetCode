/*
124. 二叉树中的最大路径和

二叉树中的路径被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中至多出现一次。该路径至少包含一个节点，且不一定经过根节点。

路径和是路径中各节点值的总和。

给你一个二叉树的根节点 root，返回其最大路径和。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const maxPathSum = root => {
  // 返回节点的最大贡献值，沿路更新包含节点的最大路径和
  let max = -Infinity;
  const maxGain = node => {
    if (!node) return 0;
    const leftGain = maxGain(node.left);
    const rightGain = maxGain(node.right);
    const sum = node.val + Math.max(leftGain, 0) + Math.max(rightGain, 0);
    max = Math.max(sum, max);
    return node.val + Math.max(0, leftGain, rightGain);
  };
  maxGain(root);
  return max;
};
