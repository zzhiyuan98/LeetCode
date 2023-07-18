import { deserialize } from "../hot100/297.js";

/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */

var treeToDoublyList = function(root) {
  if (!root) {
    return null;
  }
  let prev = null;
  let head = null;
  const dfs = node => {
    if (!node) {
      return;
    }
    dfs(node.left);
    if (!prev) {
      head = node;
    }
    else {
      prev.right = node;
    }
    node.left = prev;
    prev = node;
    dfs(node.right);
  };
  dfs(root);
  head.left = prev;
  prev.right = head;
  return head;
};

const input = "4,2,6,1,3,5,#";
const root = deserialize(input);
console.log(treeToDoublyList(root));
