var findNumberIn2DArray = function(matrix, target) {
  const n = matrix.length;
  const m = matrix[0]?.length || 0;
  let i = 0;
  let j = m - 1;
  while (i < n && j >= 0) {
    const number = matrix[i][j];
    if (number === target) {
      return true;
    }
    if (number < target) {
      i++;
    }
    else {
      j--;
    }
  }
  return false;
};
