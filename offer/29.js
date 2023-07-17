const spiralOrder = function(matrix) {
  const m = matrix.length;
  if (m === 0) {
    return [];
  }
  const n = matrix[0].length;
  const ans = [];

  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;

  const check = () => ans.length === m * n;

  while (!check()) {
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
    if (check()) break;
    top++;
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }
    if (check()) break;
    right--;
    for (let i = right; i >= left; i--) {
      ans.push(matrix[bottom][i]);
    }
    if (check()) break;
    bottom--;
    for (let i = bottom; i >= top; i--) {
      ans.push(matrix[i][left]);
    }
    left++;
  }
  return ans;
};

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12],
];
console.log(spiralOrder(matrix));
