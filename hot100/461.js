/*
461. 汉明距离

两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

给你两个整数 x 和 y，计算并返回它们之间的汉明距离。
 */

var hammingDistance = function(x, y) {
  let s1 = x.toString(2);
  let s2 = y.toString(2);
  const diff = Math.abs(s1.length - s2.length);
  if (s1.length < s2.length) {
    s1 = "0".repeat(diff) + s1;
  }
  else if (s1.length > s2.length) {
    s2 = "0".repeat(diff) + s2;
  }
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) count++;
  }
  return count;
};
