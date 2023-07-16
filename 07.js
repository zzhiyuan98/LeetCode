var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }
  const rootVal = preorder[0];
  const rootIndex = inorder.findIndex(v => v === rootVal);
  const left = inorder.slice(0, rootIndex);
  const right = inorder.slice(rootIndex + 1);
  const root = new TreeNode(rootVal);
  const preorderL = preorder.filter(v => left.includes(v));
  const preorderR = preorder.filter(v => right.includes(v));
  root.left = buildTree(preorderL, left);
  root.right = buildTree(preorderR, right);
  return root;
};
