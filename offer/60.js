var dicesProbability = function(n) {
  // dp[i][j] 表示掷 i 个骰子，点数为 j 的次数
  const dp = Array.from(Array(n + 1), () => []);
  for (let j = 1; j <= 6; j++) {
    dp[1][j] = 1;
  }
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i * 6; j++) {
      dp[i][j] = 0;
      for (let k = 1; k <= 6; k++) {
        if (k >= j) {
          break;
        }
        dp[i][j] += dp[i - 1][j - k] || 0;
      }
    }
  }
  const all = Math.pow(6, n);
  return dp[n].filter(e => e).map(e => e / all);
};

const n = 2;
console.log(dicesProbability(n));
