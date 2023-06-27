/*
647. 回文子串

给你一个字符串 s，请你统计并返回这个字符串中回文子串的数目。

回文字符串是正着读和倒过来读一样的字符串。

子字符串是字符串中的由连续字符组成的一个序列。

具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
*/

const countSubstrings = s => {
  const n = s.length;
  // dp[i][j] 表示 s 在 [i, j] 是否是一个回文子串
  const dp = Array.from(Array(n), () => new Array(n));
  let count = 0;
  for (let j = 0; j < n; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] === s[j] && (j - i + 1 <= 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        count++;
      }
    }
  }
  return count;
};

// expected output: 6
const s = "aaa";
console.log(countSubstrings(s));
