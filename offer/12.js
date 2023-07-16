var exist = function(board, word) {
  const m = board.length;
  const n = board[0].length;
  const visited = Array.from(Array(m), () => new Array(n).fill(false));
  const isLegal = (i, j) => i >= 0 && i < m && j >= 0 && j < n;
  const directions = [[1,0],[-1,0],[0,1],[0,-1]];
  const dfs = (i, j, start) => {
    if (board[i][j] !== word[start]) {
      return false;
    }
    if (start === word.length - 1) {
      return true;
    }
    visited[i][j] = true;
    for (const d of directions) {
      const x = i + d[0];
      const y = j + d[1];
      if (!isLegal(x, y) || visited[x][y]) {
        continue;
      }
      if (dfs(x, y, start + 1)) {
        return true;
      }
    }
    visited[i][j] = false;
    return false;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
