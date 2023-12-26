/*
2639. 查询网格图中每一列的宽度

给你一个下标从 0 开始的 m x n 整数矩阵 grid。矩阵中某一列的宽度是这一列数字的最大字符串长度。

比方说，如果 grid = [[-10], [3], [12]] ，那么唯一一列的宽度是 3，因为 -10 的字符串长度为 3。
请你返回一个大小为 n 的整数数组 ans ，其中 ans[i] 是第 i 列的宽度。

一个有 len 个数位的整数 x，如果是非负数，那么字符串长度为 len，否则为 len + 1。
 */

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
  const ans = [];
  const m = grid.length;
  const n = grid[0].length;
  for (let j = 0; j < n; j++) {
    let max = -Infinity;
    for (let i = 0; i < m; i++) {
      max = Math.max(max, grid[i][j].toString().length);
    }
    ans[j] = max;
  }
  return ans;
};
