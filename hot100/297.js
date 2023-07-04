/*
297. 二叉树的序列化与反序列化

序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const ans = [];
  const queue = [root];
  while (queue.length !== 0) {
    const node = queue.shift();
    if (node === null) {
      ans.push("#");
    }
    else {
      ans.push(node.val.toString());
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return ans.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const values = data.split(",");
  const getNodeByValue = value => value === "#" ? null : new TreeNode(value);
  const root = getNodeByValue(values.shift());
  const queue = [root];
  while (values.length !== 0) {
    const node = queue.shift();
    node.left = getNodeByValue(values.shift());
    if (node.left !== null) {
      queue.push(node.left);
    }
    node.right = getNodeByValue(values.shift());
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
