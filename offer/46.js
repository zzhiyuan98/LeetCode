var translateNum = function(num) {
  const str = num.toString();
  const n = str.length;
  if (!n) {
    return 0;
  }
  // dp[i] 表示 num 的前 i 个数字有多少种翻译方法
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1];
    const value = parseInt(str.substring(i - 2, i));
    if (value >= 10 && value <= 25) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[n];
};

const num = 12258;
console.log(translateNum(num));
