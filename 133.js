/*
133. 克隆图

给你无向连通图中一个节点的引用，请你返回该图的深拷贝（克隆）。

图中的每个节点都包含它的值 val（int）和其邻居的列表（list[Node]）。
 */

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

const map = new Map();

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (!node) {
    return null;
  }
  if (map.has(node)) {
    return map.get(node);
  }
  const cloneNode = new Node(node.val);
  map.set(node, cloneNode);
  cloneNode.neighbors = node.neighbors.map(cloneGraph);
  return cloneNode;
};
