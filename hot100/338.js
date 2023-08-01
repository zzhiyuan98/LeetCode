/*
338. 比特位计数

给你一个整数 n ，对于 0 <= i <= n 中的每个 i，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。
 */

var countBits = function(n) {
  const ans = new Array(n + 1);
  const count = str => {
    let sum = 0;
    for (const char of str) {
      if (char === "1") sum++;
    }
    return sum;
  };
  for (let i = 0; i <= n; i++) {
    ans[i] = count(i.toString(2));
  }
  return ans;
};
