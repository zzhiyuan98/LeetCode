/* 2027. 转换字符串的最少操作次数 */

const minimumMoves = s => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "X") {
      count++;
      i += 2;
    }
  }
  return count;
};
