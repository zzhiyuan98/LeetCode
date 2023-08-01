/*
139. 单词拆分

给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s。

注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 */

const wordBreak = (s, wordDict) => {
  const n = s.length;
  const set = new Set(wordDict);
  // dp[i] 表示 s 的前 i 个字符能否被拆分
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
};

const wordBreak1 = (s, wordDict) => {
  const dfs = s => {
    if (s === "") return true;
    for (const word of wordDict) {
      if (s.startsWith(word) && dfs(s.substring(word.length))) return true;
    }
    return false;
  };
  return dfs(s);
};

const s = "applepenapple";
const wordDict = ["apple", "pen"];
console.log(wordBreak(s, wordDict));
