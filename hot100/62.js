const uniquePaths = (m, n) => {
  /*
    对于 3 * 7 的网格，从左上角到左下角
    一共需要往右 2 次，往下 6 次
    排列组合 2 和 6，C82
   */
  const f = n => {
    if (n <= 1) return 1;
    let prev = 1;
    for (let i = 2; i <= n; i++) {
      prev = prev * i;
    }
    return prev;
  };
  const getC = (n, r) => f(n) / (f(r) * f(Math.abs(n - r)));
  return getC(m + n - 2, m - 1);
};

const m = 3;
const n = 7;
console.log(uniquePaths(m, n));
