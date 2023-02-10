const minPathSum = grid => {
  const m = grid.length;
  const n = grid[0].length;
  const getPathSum = (i, j) => {
    if (i >= m || j >= n) return Infinity;
    if (i === m - 1 && j === n - 1) return grid[i][j];
    return grid[i][j] + Math.min(getPathSum(i + 1, j), getPathSum(i, j + 1));
  };
  return getPathSum(0, 0);
};

const grid = [[1,3,1],[1,5,1],[4,2,1]]; // expected 7
console.log(minPathSum(grid));
