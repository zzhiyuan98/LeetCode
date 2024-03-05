/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const cnt = new Map();
  for (const char of t) {
    cnt.set(char, (cnt.get(char) || 0) + 1);
  }
  let left = 0;
  let right = 0;
  const window = new Map();
  let valid = 0;
  let start = null;
  let minLen = Infinity;
  while (right < s.length) {
    if (cnt.has(s[right])) {
      window.set(s[right], (window.get(s[right]) || 0) + 1);
      if (window.get(s[right]) === cnt.get(s[right])) {
        valid++;
      }
    }
    if (valid === cnt.size) {
      while (!window.has(s[left]) || window.get(s[left]) > cnt.get(s[left])) {
        if (window.get(s[left]) > cnt.get(s[left])) {
          window.set(s[left], window.get(s[left]) - 1);
        }
        left++;
      }
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
      }
    }
    right++;
  }
  return start === null ? "" : s.substring(start, start + minLen);
};

console.log(minWindow("ab", "a"));
