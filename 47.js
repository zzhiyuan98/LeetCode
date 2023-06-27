var maxValue = function(grid) {
  // f(i, j) = grid[i][j] + Math.max(f(i - 1, j), f(i, j - 1))
  const m = grid.length;
  const n = grid[0].length;
  const f = Array.from(Array(m), () => new Array(n));
  f[0][0] = grid[0][0];
  // 初始化第一行和第一列
  for (let j = 1; j < n; j++) {
    f[0][j] = grid[0][j] + f[0][j - 1];
  }
  for (let i = 1; i < m; i++) {
    f[i][0] = grid[i][0] + f[i - 1][0];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      f[i][j] = grid[i][j] + Math.max(f[i - 1][j], f[i][j - 1]);
    }
  }
  console.log(f);
  return f[m - 1][n - 1];
};

const grid = [[1,3,1],[1,5,1],[4,2,1]];
console.log(maxValue(grid));
