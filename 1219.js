/*
1219. 黄金矿工

你要开发一座金矿，地质勘测学家已经探明了这座金矿中的资源分布，并用大小为 m * n 的网格 grid 进行了标注。每个单元格中的整数就表示这一单元格中的黄金数量；如果该单元格是空的，那么就是 0。

为了使收益最大化，矿工需要按以下规则来开采黄金：

每当矿工进入一个单元，就会收集该单元格中的所有黄金。
矿工每次可以从当前位置向上下左右四个方向走。
每个单元格只能被开采（进入）一次。
不得开采（进入）黄金数目为 0 的单元格。
矿工可以从网格中任意一个有黄金的单元格出发或者是停止。
 */

const getMaximumGold = function(grid) {
  const m = grid.length;
  const n = grid[0].length;

  const visited = Array.from(Array(m), () => new Array(n).fill(false));
  const directions = [[1,0],[-1,0],[0,1],[0,-1]];
  const dfs = (i, j) => {
    let max = 0;
    for (const d of directions) {
      const x = i + d[0];
      const y = j + d[1];
      if (x < 0 || x >= m || y < 0 || y >= n || !grid[x][y] || visited[x][y]) {
        continue;
      }
      visited[x][y] = true;
      max = Math.max(max, dfs(x, y));
      visited[x][y] = false;
    }
    return grid[i][j] + max;
  };

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== 0) {
        visited[i][j] = true;
        ans = Math.max(ans, dfs(i, j));
        visited[i][j] = false;
      }
    }
  }
  return ans;
};

// 24
const grid = [[0,6,0],[5,8,7],[0,9,0]];
console.log(getMaximumGold(grid));
