/*
给定一个二叉树的 root，返回最长的路径的长度，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。

两个节点之间的路径长度由它们之间的边数表示。
 */

import { deserialize } from "./hot100/297.js";

const longestUniValuePath = function(root) {
  let ans = 0;
  // 返回包含节点的单边最长同值路径
  const dfs = node => {
    if (!node) {
      return 0;
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    let leftMax = 0;
    let rightMax = 0;
    if (node.left && node.val === node.left.val) {
      leftMax = left + 1;
    }
    if (node.right && node.val === node.right.val) {
      rightMax = right + 1;
    }
    ans = Math.max(ans, leftMax + rightMax);
    return Math.max(leftMax, rightMax);
  };
  dfs(root);
  return ans;
};

const input = "1,4,5,4,4,#,5";
const root = deserialize(input);
console.log(longestUniValuePath(root));
