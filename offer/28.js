var isSymmetric = function(root) {
  if (!root) {
    return true;
  }
  const recur = (p, q) => {
    if (!p && !q) {
      return true;
    }
    if (!p || !q) {
      return false;
    }
    return p.val === q.val && recur(p.left, q.right) && recur(p.right, q.left);
  };
  return recur(root.left, root.right);
};
