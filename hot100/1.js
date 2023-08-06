import { deserialize } from "./297.js";

var pathSum = function(root, targetSum) {
  let count = 0;
  const dfs = (node, currentSum) => {
    if (!node) return;
    const sum = node.val + currentSum;
    if (sum === targetSum) {
      count++;
    }
    dfs(node.left, sum);
    dfs(node.right, sum);
    dfs(node.left, 0);
    dfs(node.right, 0);
  };
  dfs(root, 0);
  return count;
};

const data = "1,#,2,#,3,#,4,#,5";
console.log(pathSum(deserialize(data), 3));
