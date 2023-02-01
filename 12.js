var exist = function(board, word) {
  const m = board.length;
  const n = board[0].length;
  const wordLength = word.length;
  const visited = Array.from(Array(m), () => new Array(n));
  const recur = (i, j, charIndex) => {
    if (i < 0 || j < 0 || i >= m || j >= n || visited[i][j]) return false;
    if (board[i][j] === word[charIndex]) {
      if (charIndex === wordLength - 1) return true;
      visited[i][j] = true;
      const next = charIndex + 1;
      if (recur(i - 1, j, next) || recur(i + 1, j, next) || recur(i, j - 1, next) || recur(i, j + 1, next)) {
        return true;
      }
      else {
        visited[i][j] = false;
        return false;
      }
    }
    return false;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (recur(i, j, 0)) return true;
    }
  }
  return false;
};

/*
  [
    [A, B, C, E],
    [S, F, E, S],
    [A, D, E, E],
  ]
 */
