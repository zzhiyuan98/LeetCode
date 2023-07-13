/*
200. 岛屿数量

给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。
 */
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
