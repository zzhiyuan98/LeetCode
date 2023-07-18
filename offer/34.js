const isLeaf = node => node && !node.left && !node.right;

var pathSum = function(root, target) {
  const ans = [];
  const dfs = (node, target, output) => {
    if (!node) {
      return;
    }
    if (isLeaf(node) && node.val === target) {
      ans.push(output.concat(node.val));
      return;
    }
    dfs(node.left, target - node.val, output.concat(node.val));
    dfs(node.right, target - node.val, output.concat(node.val));
  };
  dfs(root, target, []);
  return ans;
};
