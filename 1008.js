/*
1008. 前序遍历构造二叉搜索树

给定一个整数数组，它表示 BST (即二叉搜索树) 的先序遍历，构造树并返回其根。

保证对于给定的测试用例，总是有可能找到具有给定需求的二叉搜索树。

二叉搜索树是一棵二叉树，其中每个节点，Node.left 的任何后代的值严格小于 Node.val，Node.right 的任何后代的值严格大于 Node.val。

二叉树的前序遍历首先显示节点的值，然后遍历 Node.left，最后遍历 Node.right。
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

const bstFromPreorder = function(preorder) {
  if (!preorder.length) {
    return null;
  }
  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);
  const index = preorder.findIndex(v => v > rootVal);
  if (index === -1) {
    root.left = bstFromPreorder(preorder.slice(1));
  }
  else {
    root.left = bstFromPreorder(preorder.slice(1, index));
    root.right = bstFromPreorder(preorder.slice(index));
  }
  return root;
};

const preorder = [8,5,1,7,10,12];
bstFromPreorder(preorder);
