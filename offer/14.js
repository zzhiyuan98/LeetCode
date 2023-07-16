var cuttingRope = function(n) {
  if (n === 2) {
    return 1;
  }
  if (n === 3) {
    return 2;
  }
  // dp[i] 表示长度为 i 的绳子得到的最大乘积
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;
  for (let i = 4; i <= n; i++) {
    let max = 0;
    for (let j = 1; j < i; j++) {
      max = Math.max(max, dp[j] * dp[i - j]);
    }
    dp[i] = max;
  }
  return dp[n];
};

const n = 8;
console.log(cuttingRope(n));
