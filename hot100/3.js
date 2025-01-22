/*
3. 无重复字符的最长子串

给定一个字符串 s，请你找出其中不含有重复字符的最长子串的长度。
 */

// 滑动窗口，移动左边界和右边界
var lengthOfLongestSubstring = function(s) {
  if (s.length === 1) return 1;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const set = new Set();
    set.add(s[i]);
    let right = i + 1;
    while (right < s.length) {
      if (set.has(s[right])) {
        break;
      }
      set.add(s[right]);
      right++;
    }
    max = Math.max(max, right - i);
  }
  return max;
};

const lengthOfLongestSubstring1 = s => {
  let max = 0;
  let left = 0;
  let right = 0;
  let window = new Map();
  while (right < s.length) {
    const rightChar = s[right++];
    const count = window.has(rightChar) ? window.get(rightChar) + 1 : 1;
    window.set(rightChar, count);
    while (window.get(rightChar) > 1) {
      const leftChar = s[left++];
      window.set(leftChar, window.get(leftChar) - 1);
    }
    max = Math.max(max, right - left);
  }
  return max;
};

var lengthOfLongestSubstring2 = function(s) {
  let max = 0;
  let left = 0;
  let right = 0;
  const map = new Map();
  while (right < s.length) {
    const char = s[right];
    if (map.has(char) && map.get(char) >= left) {
      max = Math.max(right - left, max);
      left = map.get(char) + 1;
    }
    map.set(char, right);
    right++;
  }
  return Math.max(max, right - left);
};

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
