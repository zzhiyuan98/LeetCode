/*
279. 完全平方数

给你一个整数 n，返回 和为 n 的完全平方数的最少数量。

完全平方数是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
*/

const numSquares = n => {
  const f = [];
  f[0] = 0;
  for (let i = 1; i <= n; i++) {
    let min = Infinity;
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, f[i - j * j]);
    }
    f[i] = min + 1;
  }
  return f[n];
};

// expected output: 3
const n = 12;
console.log(numSquares(n));
