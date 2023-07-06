const wordBreak = (s, wordDict) => {
  // f[i] 表示 s 的前 i 个字符是否能被拼接出来
  // f[i] -> f[i + 1]
  const set = new Set(wordDict);
  const f = [];
  f[0] = true;
  for (let i = 1; i <= s.length; i++) {
    let flag = false;
    for (let j = 0; j < i; j++) {
      if (f[j] && set.has(s.substring(j, i))) {
        flag = true;
        break;
      }
    }
    f[i] = flag;
  }
  return f[s.length];
  /*
  const dfs = s => {
    if (s === "") return true;
    for (const word of wordDict) {
      if (s.startsWith(word) && dfs(s.substring(word.length))) return true;
    }
    return false;
  };
  return dfs(s);
   */
};

const s = "applepenapple";
const wordDict = ["apple", "pen"];
console.log(wordBreak(s, wordDict));
