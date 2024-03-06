/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const row = new Map();
  const column = new Map();
  const box = new Map();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        continue;
      }
      if (row.get(i)?.includes(board[i][j])) {
        return false;
      }
      row.set(i, (row.get(i) || []).concat(board[i][j]));
      if (column.get(j)?.includes(board[i][j])) {
        return false;
      }
      column.set(j, (column.get(j) || []).concat(board[i][j]));
      const boxId = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (box.get(boxId)?.includes(board[i][j])) {
        return false;
      }
      box.set(boxId, (box.get(boxId) || []).concat(board[i][j]));
    }
  }
  return true;
};

const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
console.log(isValidSudoku(board));
