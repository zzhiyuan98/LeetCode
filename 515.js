/*
515. 在每个树行中找最大值

给定一棵二叉树的根节点 root，请找出该二叉树中每一层的最大值。
 */

const largestValues = function(root) {
  if (!root) {
    return [];
  }
  const ans = [];
  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    let max = -Infinity;
    for (let i = 1; i <= size; i++) {
      const node = queue.shift();
      max = Math.max(max, node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    ans.push(max);
  }
  return ans;
};
