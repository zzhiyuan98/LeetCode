/*
5. 最长回文子串

给你一个字符串 s，找到 s 中最长的回文子串。

如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
 */

const longestPalindrome = s => {
  const n = s.length;
  // dp[i][j] 表示 s.substring(i, j + 1) 是否回文
  const dp = Array.from(Array(n), () => new Array(n).fill(false));
  let max = 0;
  let ans = "";
  for (let len = 1; len <= s.length; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      const j = i + len - 1;
      if (s[i] === s[j]) {
        dp[i][j] = len <= 3 ? true : dp[i + 1][j - 1];
      }
      if (dp[i][j] && len > max) {
        max = len;
        ans = s.substring(i, j + 1);
      }
    }
  }
  return ans;
};

const s = "babad";
console.log(longestPalindrome(s));
