/*
240. 搜索二维矩阵 II

编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。
 */

const searchMatrix = (matrix, target) => {
  const m = matrix.length;
  const n = matrix[0].length;
  let boundary = n - 1;
  for (let i = 0; i < m; i++) {
    for (let j = boundary; j >= 0; j--) {
      const num = matrix[i][j];
      if (num === target) return true;
      if (num < target) break;
      boundary--;
    }
  }
  return false;
};

const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
const target = 5;
console.log(searchMatrix(matrix, target));
