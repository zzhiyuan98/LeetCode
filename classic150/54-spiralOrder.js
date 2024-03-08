/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let top = 0;
  let right = n - 1;
  let bottom = m - 1;
  let left = 0;
  const res = [];
  let i;
  let j;
  const check = () => res.length === m * n;
  while (!check()) {
    i = top;
    j = left;
    while (j <= right) {
      res.push(matrix[i][j]);
      j++;
    }
    if (check()) return res;
    top++;
    i = top;
    j = right;
    while (i <= bottom) {
      res.push(matrix[i][j]);
      i++;
    }
    if (check()) return res;
    right--;
    i = bottom;
    j = right;
    while (j >= left) {
      res.push(matrix[i][j]);
      j--;
    }
    if (check()) return res;
    bottom--;
    i = bottom;
    j = left;
    while (i >= top) {
      res.push(matrix[i][j]);
      i--;
    }
    if (check()) return res;
    left++;
  }
  return res;
};

const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralOrder(matrix));
