/*
64. 最小路径和

给定一个包含非负整数的 m x n 网格 grid，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。
 */

var minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  // dp[i][j] 表示从左上角到 (i, j) 的最小路径和
  const dp = Array.from(Array(m), () => new Array(n));
  dp[0][0] = grid[0][0];
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m - 1][n - 1];
};

const minPathSum1 = grid => {
  const m = grid.length;
  const n = grid[0].length;
  const cachedSum = Array.from(Array(m), () => new Array(n));
  const getPathSum = (i, j) => {
    if (i >= m || j >= n) return Infinity;
    if (cachedSum[i][j]) return cachedSum[i][j];
    if (i === m - 1 && j === n - 1) return grid[i][j];
    const res = grid[i][j] + Math.min(getPathSum(i + 1, j), getPathSum(i, j + 1));
    cachedSum[i][j] = res;
    return res;
  };
  return getPathSum(0, 0);
};

const grid = [[1,3,1],[1,5,1],[4,2,1]]; // expected 7
console.log(minPathSum(grid));
