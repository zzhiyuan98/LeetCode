/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const buildTree = (preorder, inorder) => {
  if (preorder.length === 0) return null;
  const root = new TreeNode(preorder[0]);
  const rootIndex = inorder.findIndex(v => v === preorder[0]);
  const left = inorder.slice(0, rootIndex);
  const right = inorder.slice(rootIndex + 1);
  const preLeft = preorder.filter(v => left.includes(v));
  const preRight = preorder.filter(v => right.includes(v));
  root.left = buildTree(preLeft, left);
  root.right = buildTree(preRight, right);
  return root;
};

// expected output: [3,9,20,null,null,15,7]
const preorder = [3,9,20,15,7];
const inorder = [9,3,15,20,7];
console.log(buildTree(preorder, inorder));
