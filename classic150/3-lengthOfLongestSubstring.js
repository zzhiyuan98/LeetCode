/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0;
  let right = 0;
  let max = 0;
  const map = new Map();
  while (right < s.length) {
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      max = Math.max(max, right - left);
      const prevIndex = map.get(s[right]);
      left = prevIndex + 1;
    }
    map.set(s[right], right);
    right++;
  }
  return Math.max(max, right - left);
};

console.log(lengthOfLongestSubstring("abba"));
