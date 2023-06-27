/*
538. 把二叉搜索树转换为累加树

给出二叉搜索树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。

提醒一下，二叉搜索树满足下列约束条件：
  节点的左子树仅包含键小于节点键的节点。
  节点的右子树仅包含键大于节点键的节点。
  左右子树也必须是二叉搜索树。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const convertBST = root => {
  let sum = 0;
  const postOrder = node => {
    if (!node) return;
    postOrder(node.right);
    node.val += sum;
    sum = node.val;
    postOrder(node.left);
  };
  postOrder(root);
  return root;
};
