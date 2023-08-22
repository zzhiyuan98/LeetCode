const spiralOrder = function(matrix) {
  const m = matrix.length;
  if (m === 0) return [];
  const n = matrix[0].length;

  const ans = [];
  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;

  while (true) {
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
    top++;
    if (top > bottom) break;
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }
    right--;
    if (left > right) break;
    for (let i = right; i >= left; i--) {
      ans.push(matrix[bottom][i]);
    }
    bottom--;
    if (top > bottom) break;
    for (let i = bottom; i >= top; i--) {
      ans.push(matrix[i][left]);
    }
    left++;
    if (left > right) break;
  }
  return ans;
};

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12],
];
console.log(spiralOrder(matrix));
