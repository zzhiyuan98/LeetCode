/*
102. 二叉树的层序遍历

给你二叉树的根节点 root，返回其节点值的层序遍历。（即逐层地，从左到右访问所有节点）。
 */

const levelOrder = root => {
  if (!root) return []
  const ans = [];
  const queue = [root];
  while (queue.length) {
    const level = [];
    const count = queue.length;
    for (let i = 1; i <= count; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    ans.push(level);
  }
  return ans;
};
