/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  const m = s.length;
  const n = t.length;
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  return i === m;
};
