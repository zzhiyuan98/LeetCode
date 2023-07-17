var isMatch = function(s, p) {
  const m = s.length;
  const n = p.length;
  if (m === 0 && n === 0) {
    return true;
  }
  if (m === 0 && n === 1 || (m > 0 && n === 0)) {
    return false;
  }
  // dp[i][j] 表示 s 的前 i 个字符是否能与 p 的前 j 个字符匹配
  const dp = Array.from(Array(m + 1), () => new Array(n + 1).fill(false));
  // 初始化第一行
  dp[0][0] = true;
  dp[0][1] = false;
  for (let j = 2; j <= n; j++) {
    dp[0][j] = p[j - 1] === "*" ? dp[0][j - 2] : false;
  }
  // 初始化第一列
  for (let i = 1; i <= m; i++) {
    dp[i][0] = false;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === s[i - 1] || p[j - 1] === ".") {
        dp[i][j] = dp[i - 1][j - 1];
      }
      else if (p[j - 1] === "*") {
        // * 前的字符拿来用几次
        // 0 次
        if (dp[i][j - 2]) {
          dp[i][j] = true;
        }
        // 1 次或多次
        else if (s[i - 1] === p[j - 2] || p[j - 2] === ".") {
          dp[i][j] = dp[i - 1][j - 2] || dp[i - 1][j];
        }
      }
    }
  }
  return dp[m][n];
};

const s = "mississippi";
const p = "mis*is*p*.";
console.log(isMatch(s, p));
