/*
85. 最大矩形

给定一个仅包含 0 和 1、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
 */

var maximalRectangle = function(matrix) {
  const m = matrix.length;
  if (!m) return 0;
  const n = matrix[0].length;
  // left[i][j] 表示 (i, j) 及左侧连续 1 的个数
  const left = Array.from(Array(m), () => new Array(n));
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "0") {
        left[i][j] = 0;
      } else {
        left[i][j] = j === 0 ? 1 : left[i][j - 1] + 1;
      }
      let minWidth = Infinity;
      for (let k = i; k >= 0; k--) {
        const height = i - k + 1;
        minWidth = Math.min(minWidth, left[k][j]);
        ans = Math.max(ans, height * minWidth);
      }
    }
  }
  return ans;
};

const matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
console.log(maximalRectangle(matrix));
