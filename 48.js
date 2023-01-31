const lengthOfLongestSubstring = s => {
  if (s.length < 2) return s.length;
  let max = 1;
  let pre = 1;
  const map = new Map();
  map.set(s[0], 0);
  for (let i = 1; i < s.length; i++) {
    const char = s[i];
    if (map.has(char)) {
      const index = map.get(char);
      pre = pre >= i - index ? i - index : pre + 1;
    }
    else {
      pre++;
    }
    max = Math.max(pre, max);
    map.set(char, i);
  }
  return max;
};

const s = "zz";
console.log(lengthOfLongestSubstring(s));
