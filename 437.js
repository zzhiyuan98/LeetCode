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
 * @param {number} targetSum
 * @return {number}
 */

const rootSum = (node, targetSum) => {
  let ans = 0;
  if (node === null) return ans;
  if (node.val === targetSum) ans++;
  ans += rootSum(node.left, targetSum - node.val);
  ans += rootSum(node.right, targetSum - node.val);
  return ans;
};

var pathSum = function(root, targetSum) {
  let count = 0;
  if (root === null) return count;
  count += rootSum(root, targetSum);
  count += pathSum(root.left, targetSum);
  count += pathSum(root.right, targetSum);
  return count;
};
