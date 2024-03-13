/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length;
  let depth = 0;
  while (depth < Math.floor(n / 2)) {
    const len = n - depth * 2;
    for (let i = 0; i < len - 1; i++) {
      const temp = matrix[depth][depth + i];
      matrix[depth][depth + i] = matrix[depth + len - 1 - i][depth];
      matrix[depth + len - 1 - i][depth] = matrix[depth + len - 1][n - 1 - depth - i];
      matrix[depth + len - 1][n - 1 - depth - i] = matrix[depth + i][n - 1 - depth];
      matrix[depth + i][n - 1 - depth] = temp;
    }
    depth++;
  }
};

const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(matrix)
console.log(matrix);
