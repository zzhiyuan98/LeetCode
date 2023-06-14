/*
3. 无重复字符的最长子串

给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。
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


const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
