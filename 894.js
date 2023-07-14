/*
894. 所有可能的真二叉树

给你一个整数 n，请你找出所有可能含 n 个节点的真二叉树，并以列表形式返回。答案中每棵树的每个节点都必须符合 Node.val == 0。

答案的每个元素都是一棵真二叉树的根节点。你可以按任意顺序返回最终的真二叉树列表。

真二叉树是一类二叉树，树中每个节点恰好有 0 或 2 个子节点。
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const map = new Map();
map.set(0, []);
map.set(1, [new TreeNode(0)]);

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const allPossibleFBT = function(n) {
  if (map.has(n)) {
    return map.get(n);
  }
  const ans = [];
  for (let i = 0; i <= n - 1; i++) {
    const leftTrees = allPossibleFBT(i);
    const rightTrees = allPossibleFBT(n - 1 - i);
    for (const left of leftTrees) {
      for (const right of rightTrees) {
        ans.push(new TreeNode(0, left, right));
      }
    }
  }
  map.set(n, ans);
  return ans;
};
