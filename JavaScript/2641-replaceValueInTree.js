/*
2641. 二叉树的堂兄弟节点 II

给你一棵二叉树的根 root，请你将每个节点的值替换成该节点的所有 堂兄弟节点值的和。

如果两个节点在树中有相同的深度且它们的父节点不同，那么它们互为堂兄弟。

请你返回修改值之后，树的根 root。

注意，一个节点的深度指的是从树根节点到这个节点经过的边数。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var replaceValueInTree = function(root) {
  if (!root) {
    return root;
  }
  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    const layer = [];
    for (let i = 1; i <= size; i++) {
      const node = queue.shift();
      layer.push(node);
      if (node.left) {
        node.left.parent = node;
        queue.push(node.left);
      }
      if (node.right) {
        node.right.parent = node;
        queue.push(node.right);
      }
    }
    const map = new Map();
    for (const node of layer) {
      if (map.has(node.parent)) {

      }

    }
  }
};
