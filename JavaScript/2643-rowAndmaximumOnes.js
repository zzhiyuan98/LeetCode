/*
2643. 一最多的行

给你一个大小为 m x n 的二进制矩阵 mat ，请你找出包含最多 1 的行的下标（从 0 开始）以及这一行中 1 的数目。

如果有多行包含最多的 1 ，只需要选择 行下标最小 的那一行。

返回一个由行下标和该行中 1 的数量组成的数组。
 */

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
  const m = mat.length;
  const n = mat[0].length;
  let maxCount = 0;
  let rowIndex = 0;
  for (let i = 0; i < m; i++) {
    const sum = mat[i].reduce((prev, curr) => curr === 1 ? prev + 1 : prev, 0);
    if (sum > maxCount) {
      maxCount = sum;
      rowIndex = i;
    }
  }
  return [rowIndex, maxCount];
};

const mat = [[0,0,0],[0,1,1]];
console.log(rowAndMaximumOnes(mat));
