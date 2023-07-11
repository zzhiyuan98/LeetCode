/*
1143. 最长公共子序列

给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。如果不存在公共子序列，返回 0。

一个字符串的子序列是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的公共子序列是这两个字符串所共同拥有的子序列。
 */

var longestCommonSubsequence = function(text1, text2) {
  const m = text1.length;
  const n = text2.length;
  // dp[i][j] 表示 text1[0, i] 和 text2[0, j] 的最长公共子序列长度
  const dp = Array.from(Array(m), () => new Array(n));
  for (let j = 0; j < n; j++) {
    dp[0][j] = text2.substring(0, j + 1).includes(text1[0]) ? 1 : 0;
  }
  for (let i = 0; i < m; i++) {
    dp[i][0] = text1.substring(0, i + 1).includes(text2[0]) ? 1 : 0;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  return dp[m - 1][n - 1];
};

const text1 = "abcde";
const text2 = "ace";
console.log(longestCommonSubsequence(text1, text2));
