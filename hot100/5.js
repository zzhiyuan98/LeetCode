var longestPalindrome = function(s) {
  const len = s.length;
  // dp[i][j] 表示 s.substring(i, j + 1) 是否回文
  const dp = Array.from(Array(len), () => new Array(len));
  // 初始化，单字母字符串自身回文
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }
  let maxLength = 1;
  let start = 0;
  for (let curLength = 2; curLength <= len; curLength++) {
    // 枚举左边界
    for (let i = 0; i < len; i++) {
      // 计算右边界
      const j = i + curLength - 1;
      if (j >= len) break;
      if (s[i] !== s[j]) dp[i][j] = false;
      else {
        if (curLength <= 3) dp[i][j] = true;
        else dp[i][j] = dp[i + 1][j - 1];
      }
      if (dp[i][j] && curLength > maxLength) {
        maxLength = curLength;
        start = i;
      }
    }
  }
  return s.substring(start, start + maxLength);
};

const s = "babad";
console.log(longestPalindrome(s));
