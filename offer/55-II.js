import { maxDepth } from "./55-I.js";

let isBalanced = function(root) {
  if (!root) {
    return true;
  }
  return Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

const isBalanced1 = function(root) {
  const maxDepth = node => {
    if (!node) {
      return 0;
    }
    const left = maxDepth(node.left);
    const right = maxDepth(node.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1;
    }
    return 1 + Math.max(left, right);
  };
  return maxDepth(root) !== -1;
};
