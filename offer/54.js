import { deserialize } from "../hot100/297.js";

var kthLargest = function(root, k) {
  // 反中序遍历的第 k 个节点的值
  let ans;
  let count = 0;
  const inorder = node => {
    if (!node) {
       return;
    }
    inorder(node.right);
    count++;
    if (count === k) {
      ans = node.val;
    }
    inorder(node.left);
  };
  inorder(root);
  return ans;
};

const input = "3,1,4,#,2";
console.log(kthLargest(deserialize(input), 1));
