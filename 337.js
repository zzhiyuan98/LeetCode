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
 * @return {number}
 */
var rob = function(root) {
  const f = new Map(); // 包含该节点的最大收益
  const g = new Map(); // 不包含该节点的最大收益
  f.set(null, 0);
  g.set(null, 0);
  const dfs = node => {
    if (node === null) return;
    dfs(node.left);
    dfs(node.right);
    f.set(node, node.val + g.get(node.left) + g.get(node.right) || 0);
    g.set(node, Math.max(f.get(node.left), g.get(node.left)) + Math.max(f.get(node.right), g.get(node.right)));
  };
  dfs(root);
  return Math.max(f.get(root), g.get(root));
};
