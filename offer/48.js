var lengthOfLongestSubstring = function(s) {
  let max = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const set = new Set();
    let j = i;
    while (j < n) {
      if (set.has(s[j])) {
        break;
      }
      set.add(s[j]);
      j++;
    }
    max = Math.max(max, j - i);
  }
  return max;
};

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
