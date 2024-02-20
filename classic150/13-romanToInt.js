/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const char = s[i];
    const next = i + 1 < n ? s[i + 1] : null;
    if (next && map[char] < map[next]) {
      ans -= map[char];
    } else {
      ans += map[char];
    }
  }
  return ans;
};

const s = 'MCMXCIV';
console.log(romanToInt(s));
