/*
48. 旋转图像

给定一个 n * n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 */

const rotate = matrix => {
  /*
    1  2  3  4
    5  6  7  8
    9  10 11 12
    13 14 15 16

    13 9  5  1
    14 10 6  2
    15 11 7  3
    16 12 8  4
   */
  const n = matrix.length;
  let depth = 0;
  while (depth <= n / 2) {
    const len = n - 2 * depth;
    for (let i = 0; i < len - 1; i++) {
      const temp = matrix[depth][depth + i];
      matrix[depth][depth + i] = matrix[depth + len - i - 1][depth];
      matrix[depth + len - i - 1][depth] = matrix[depth + len - 1][depth + len - i - 1];
      matrix[depth + len - 1][depth + len - i - 1] = matrix[depth + i][depth + len - 1];
      matrix[depth + i][depth + len - 1] = temp;
    }
    depth++;
  }
  return matrix;
};

// expected output: [[7,4,1],[8,5,2],[9,6,3]]
const matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(rotate(matrix));
