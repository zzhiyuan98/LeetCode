const maxValue = grid => {
  const m = grid.length;
  const n = grid[0].length;
  // dp[i][j] 表示从起点出发到 (i, j) 获得的礼物的最大价值
  const dp = Array.from(Array(m), () => new Array(n));
  dp[0][0] = grid[0][0];
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
  return dp[m - 1][n - 1];
};

const maxValue1 = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const isLegal = (i, j) => i >= 0 && i < m && j >= 0 && j < n;
  const visited = Array.from(Array(m), () => new Array(n));
  const directions = [[0,1], [1,0]];
  let max = 0;
  const dfs = (i, j, sum) => {
    const newSum = sum + grid[i][j];
    if (i === m - 1 && j === n - 1) {
      max = Math.max(max, newSum);
      return;
    }
    visited[i][j] = true;
    for (const d of directions) {
      const x = i + d[0];
      const y = j + d[1];
      if (isLegal(x, y) && !visited[x][y]) {
        dfs(x, y, newSum);
      }
    }
    visited[i][j] = false;
  };
  dfs(0, 0, 0);
  return max;
};

const grid = [
    [1,3,1],
    [1,5,1],
    [4,2,1],
];
console.log(maxValue(grid));
