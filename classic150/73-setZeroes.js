/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const symbol = "0";
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        change(i, j);
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === symbol) {
        matrix[i][j] = 0;
      }
    }
  }
  function change(x, y) {
    for (let i = 0; i < m; i++) {
      matrix[i][y] = matrix[i][y] === 0 ? 0 : symbol;
    }
    for (let j = 0; j < n; j++) {
      matrix[x][j] = matrix[x][j] === 0 ? 0 : symbol;
    }
  }
};

const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(matrix);
console.log(matrix);
