const numIslands = grid => {
  const m = grid.length;
  const n = grid[0].length;
  const isOutside = (i, j) => i < 0 || i >= m || j < 0 || j >= n;
  const isOcean = (i, j) => grid[i][j] === "0";
  const visited = Array.from(Array(m), () => new Array(n));
  // 把所有经过的点标记为 “已访问”
  const dfs = (i, j) => {
    if (isOutside(i, j) || visited[i][j]) return;
    visited[i][j] = true;
    if (isOcean(i, j)) return;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && !isOcean(i, j)) {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
};

const grid = [["1", "0", "1"],
              ["0", "1", "0"],
              ["1", "0", "1"]];
console.log(numIslands(grid));
