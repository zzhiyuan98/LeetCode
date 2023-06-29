/*
32. 最长有效括号

给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
*/

const longestValidParentheses = s => {
  // dp[i] 表示以 i 下标结尾的最长有效括号字串长度
  const dp = [];
  dp[0] = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === "(") dp[i] = 0;
    else {
      if (s[i - 1] === "(") {
        dp[i] = (dp[i - 2] || 0) + 2;
      }
      else {
        if (s[i - dp[i - 1] - 1] === "(") {
          dp[i] = dp[i - 1] + 2 + (dp[i - dp[i - 1] - 2] || 0);
        }
        else {
          dp[i] = 0;
        }
      }
    }
  }
  return Math.max(...dp);
};

// expected output: 2
const s = "(()";
console.log(longestValidParentheses(s));
