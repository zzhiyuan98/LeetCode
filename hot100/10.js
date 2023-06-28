/*
10. 正则表达式匹配

给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖整个字符串 s 的，而不是部分字符串。
*/

const isMatch = (s, p) => {
  const m = s.length;
  const n = p.length;
  // dp[i][j] 表示 s 的前 i 个字符与 p 中的前 j 个字符是否能够匹配
  // 即 s(0, i - 1) 与 p(0, j - 1) 是否匹配
  const dp = Array.from(Array(m + 1), () => new Array(n + 1).fill(false));
  dp[0][0] = true;
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === "*") dp[0][j] = dp[0][j - 2];
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === ".") {
        dp[i][j] = dp[i - 1][j - 1];
      }
      else if (p[j - 1] === "*") {
        if (s[i - 1] === p[j - 2] || p[j - 2] === ".") {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        }
        else {
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }
  return dp[m][n];
};

// expected output: false
const s = "aa";
const p = "a";
console.log(isMatch(s, p));
