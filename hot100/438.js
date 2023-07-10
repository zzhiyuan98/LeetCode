/*
438. 找到字符串中所有字母异位词

给定两个字符串 s 和 p，找到 s 中所有 p 的异位词的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

异位词指由相同字母重排列形成的字符串（包括相同的字符串）。
*/

const findAnagrams = (s, p) => {
  const cnt = new Map(); // 需要满足的字符统计
  for (const char of p) {
    const count = cnt.has(char) ? cnt.get(char) + 1 : 1;
    cnt.set(char, count);
  }
  // [left, right) 左开右闭
  let left = 0;
  let right = 0;
  const ans = [];
  const window = new Map(); // 窗口中的字符统计
  let validCount = 0; // 满足条件的字符个数
  while (right < s.length) {
    const rightChar = s[right];
    right++;
    if (cnt.has(rightChar)) {
      const count = window.has(rightChar) ? window.get(rightChar) + 1 : 1;
      window.set(rightChar, count);
      if (window.get(rightChar) === cnt.get(rightChar)) validCount++;
    }
    while (right - left + 1 > p.length) {
      if (validCount === cnt.size) {
        ans.push(left);
      }
      const leftChar = s[left];
      left++;
      if (cnt.has(leftChar)) {
        if (window.get(leftChar) === cnt.get(leftChar)) validCount--;
        window.set(leftChar, window.get(leftChar) - 1);
      }
    }
  }
  return ans;
};

// expected output: [0, 6]
const s = "cbaebabacd";
const p = "abc";
console.log(findAnagrams(s, p));
