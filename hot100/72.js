/*
72. 编辑距离

给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符
*/

const minDistance = (word1, word2) => {
  const m = word1.length;
  const n = word2.length;
  // dp[i][j] 表示将 word1 的前 i 个字符转换成 word2 的前 j 个字符所使用的最少操作数
  const dp = Array.from(Array(m + 1), () => new Array(n + 1));
  dp[0][0] = 0;
  for (let j = 1; j <= n; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      // Math.min(替换、删除、插入)
      else dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
    }
  }
  return dp[m][n];
};

// expected output: 2
const word1 = "sea";
const word2 = "eat";
console.log(minDistance(word1, word2));
