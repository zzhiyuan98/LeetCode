/*
76. 最小覆盖子串

给你一个字符串 s、一个字符串 t。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""。

注意：

对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
如果 s 中存在这样的子串，我们保证它是唯一的答案。
*/

const minWindow = (s, t) => {
  const demand = new Map();
  for (const char of t) {
    const count = demand.has(char) ? demand.get(char) + 1 : 1;
    demand.set(char, count);
  }
  let ans = "";
  let left = 0;
  let right = 0;
  let valid = 0;
  const window = new Map();
  while (right < s.length) {
    const rightChar = s[right];
    right++;
    if (demand.has(rightChar)) {
      const count = window.has(rightChar) ? window.get(rightChar) + 1 : 1;
      window.set(rightChar, count);
      if (window.get(rightChar) === demand.get(rightChar)) valid++;
    }
    while (valid === demand.size) {
      if (right - left < ans.length || ans === "") ans = s.substring(left, right);
      const leftChar = s[left];
      left++;
      if (demand.has(leftChar)) {
        if (demand.get(leftChar) === window.get(leftChar)) valid--;
        window.set(leftChar, window.get(leftChar) - 1);
      }
    }
  }
  return ans;
};

// expected output: BANC
const s = "ADOBECODEBANC";
const t = "ABC";
console.log(minWindow(s, t));
