/*
给你二叉树的根结点 root ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同。
*/

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// 前序遍历形成单链表
const flatten = root => {
  const preorder = [];
  const dfs = root => {
    if (!root) return;
    preorder.push(root.val);
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  if (preorder.length === 0) return null;
  let curr = root;
  curr.left = null;
  for (let i = 1; i < preorder.length; i++) {
    curr.right = new TreeNode(preorder[i]);
    curr = curr.right;
  }
  return root;
};

// 输入：root = [1,2,5,3,4,null,6]
// 输出：[1,null,2,null,3,null,4,null,5,null,6]
