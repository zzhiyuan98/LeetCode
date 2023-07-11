/*
1048. 最长字符串链

给出一个单词数组 words，其中每个单词都由小写英文字母组成。

如果我们可以不改变其他字符的顺序，在 wordA的任何地方添加恰好一个字母使其变成 wordB，那么我们认为 wordA 是 wordB 的前身。

例如，"abc" 是 "abac" 的前身，而 "cba" 不是 "bcad" 的前身
词链是单词 [word_1, word_2, ..., word_k] 组成的序列，k >= 1，其中 word1 是 word2 的前身，word2 是 word3 的前身，依此类推。一个单词通常是 k == 1 的 单词链。

从给定单词列表 words 中选择单词组成词链，返回词链的最长可能长度 。
 */

const longestStrChain = words => {
  words.sort((a, b) => a.length - b.length);
  // 以 word 结尾的词链最大长度
  const cnt = new Map();
  let ans = 0;
  for (const word of words) {
    let max = 1;
    for (let i = 0; i < word.length; i++) {
      const substr = word.substring(0, i) + word.substring(i + 1);
      if (cnt.has(substr)) {
        max = Math.max(max, cnt.get(substr) + 1);
      }
    }
    cnt.set(word, max);
    ans = Math.max(ans, max);
  }
  return ans;
};

// expected output: 4
const words = ["a","b","ba","bca","bda","bdca"];
console.log(longestStrChain(words));
