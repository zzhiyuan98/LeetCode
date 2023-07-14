/*
934. 最短的桥

给你一个大小为 n x n 的二元矩阵 grid，其中 1 表示陆地，0 表示水域。

岛是由四面相连的 1 形成的一个最大组，即不会与非组内的任何其他 1 相连。grid 中 恰好存在两座岛。

你可以将任意数量的 0 变为 1，以使两座岛连接起来，变成一座岛。

返回必须翻转的 0 的最小数目。
 */

const findStart = grid => {
  const n = grid.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return [i, j];
      }
    }
  }
};

const shortestBridge = function(grid) {
  const n = grid.length;
  const directions = [[1,0],[-1,0],[0,1],[0,-1]];
  const queue = [];
  const dfs = (i, j) => {
    if (i < 0 || i >= n || j < 0 || j >= n || grid[i][j] === 2 || grid[i][j] === 3) {
      return;
    }
    if (grid[i][j] === 0) {
      queue.push([i, j]);
      grid[i][j] = 2;
      return;
    }
    grid[i][j] = 2;
    for (const d of directions) {
      const x = i + d[0];
      const y = j + d[1];
      dfs(x, y);
    }
  };

  const [start_x, start_y] = findStart(grid);
  dfs(start_x, start_y);

  let step = 0;
  while (queue.length) {
    step++;
    const size = queue.length;
    for (let k = 1; k <= size; k++) {
      const [i, j] = queue.shift();
      for (const d of directions) {
        const x = i + d[0];
        const y = j + d[1];
        if (x < 0 || x >= n || y < 0 || y >= n || grid[x][y] === 2) {
          continue;
        }
        if (grid[x][y] === 1) {
          return step;
        }
        grid[x][y] = 2;
        queue.push([x, y]);
      }
    }
  }
};

// 1
const grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]];
console.log(shortestBridge(grid));
