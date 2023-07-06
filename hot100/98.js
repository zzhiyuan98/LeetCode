const isValidBST = root => {
  const dfs = (root, min, max) => {
    if (!root) return true;
    if (min !== null && root.val <= min) return false;
    if (max !== null && root.val >= max) return false;
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  };
  return dfs(root, null, null);
};
