/*
62. 不同路径

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start”）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

问总共有多少条不同的路径？
 */

// 动态规划
var uniquePaths = function(m, n) {
  // dp[i][j] 表示从起点到达 (i, j) 有多少条不同的路径
  const dp = Array.from(Array(m), () => new Array(n));
  dp[0][0] = 1;
  for (let j = 1; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

// 排列组合
const uniquePaths1 = (m, n) => {
  /*
    对于 3 * 7 的网格，从左上角到左下角
    一共需要往右 2 次，往下 6 次
    排列组合 2 和 6，C82
   */
  const f = n => {
    if (n <= 1) return 1;
    let prev = 1;
    for (let i = 2; i <= n; i++) {
      prev = prev * i;
    }
    return prev;
  };
  const getC = (n, r) => f(n) / (f(r) * f(Math.abs(n - r)));
  return getC(m + n - 2, m - 1);
};

const m = 3;
const n = 7;
console.log(uniquePaths(m, n));
