/*
08.11.硬币

硬币。给定数量不限的硬币，币值为 25 分、10 分、5 分和 1 分，编写代码计算 n 分有几种表示法。
(结果可能会很大，你需要将结果模上1000000007)
 */

var waysToChange = function(n) {
  const coins = [1,5,10,25];
  const m = coins.length;
  const MOD = 1000000007;
  // dp[i][j] 表示 coins 的前 i 种硬币组成 j 的个数
  const dp = Array.from(Array(m + 1), () => new Array(n + 1));
  for (let j = 1; j <= n; j++) {
    dp[0][j] = 0;
  }
  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (coins[i - 1] <= j) {
        dp[i][j] = (dp[i - 1][j] + dp[i][j - coins[i - 1]]) % MOD;
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[m][n];
};

console.log(waysToChange(10));
