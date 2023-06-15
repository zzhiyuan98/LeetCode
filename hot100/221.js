/*
221. 最大正方形

在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
 */

const maximalSquare = matrix => {
  const m = matrix.length;
  const n = matrix[0].length;
  // dp[i][j] 表示 以 (i, j) 为正方形右下角的最大正方形的边长
  const dp = Array.from(new Array(m), () => new Array(n));
  // 初始化第一行
  for (let j = 0; j < n; j++) {
    dp[0][j] = matrix[0][j] === "1" ? 1 : 0;
  }
  // 初始化第一列
  for (let i = 0; i < m; i++) {
    dp[i][0] = matrix[i][0] === "1" ? 1 : 0;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = matrix[i][j] === "0" ? 0 : Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
    }
  }
  const size = Math.max(...dp.flat());
  return size * size;
};

// expected output: 4
const matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
console.log(maximalSquare(matrix));
