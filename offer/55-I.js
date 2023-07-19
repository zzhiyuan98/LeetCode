export const maxDepth = function(root) {
  let max = 0;
  const dfs = (node, depth) => {
    if (!node) {
      return;
    }
    const curDepth = depth + 1;
    if (!node.left && !node.right) {
      max = Math.max(max, curDepth);
    }
    dfs(node.left, curDepth);
    dfs(node.right, curDepth);
  };
  dfs(root, 0);
  return max;
};
