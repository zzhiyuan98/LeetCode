/*
79. 单词搜索

给定一个 m x n 二维字符网格 board 和一个字符串单词 word。如果 word 存在于网格中，返回 true；否则，返回 false。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 */

var exist = function(board, word) {
  const m = board.length;
  const n = board[0].length;
  const visited = Array.from(Array(m), () => new Array(n));
  const directions = [[0,1],[0,-1],[-1,0],[1,0]];
  const isLegal = (i, j) => i >= 0 && i < m && j >= 0 && j < n;
  const dfs = (i, j, index) => {
    if (board[i][j] !== word[index]) return false;
    if (index === word.length - 1) return true;

    for (const d of directions) {
      const x = i + d[0];
      const y = j + d[1];
      if (isLegal(x, y) && !visited[x][y]) {
        visited[x][y] = true;
        if (dfs(x, y, index + 1)) return true;
        visited[x][y] = false;
      }
    }
    return false;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      visited[i][j] = true;
      if (dfs(i, j, 0)) return true;
      visited[i][j] = false;
    }
  }
  return false;
};
