/*
2624. 蜗牛排序

请你编写一段代码为所有数组实现  snail(rowsCount，colsCount) 方法，该方法将 1D 数组转换为以蜗牛排序的模式的 2D 数组。无效的输入值应该输出一个空数组。当 rowsCount * colsCount !==nums.length 时。这个输入被认为是无效的。

蜗牛排序从左上角的单元格开始，从当前数组的第一个值开始。然后，它从上到下遍历第一列，接着移动到右边的下一列，并从下到上遍历它。将这种模式持续下去，每列交替变换遍历方向，直到覆盖整个数组。例如，当给定输入数组  [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15] ，当 rowsCount = 5 且 colsCount = 4 时，需要输出矩阵如下图所示。注意，矩阵沿箭头方向对应于原数组中数字的顺序
 */

/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) {
    return [];
  }
  const ans = Array.from(Array(rowsCount), () => new Array(colsCount));
  let index = 0;
  for (let j = 0; j < colsCount; j++) {
    for (let i = 0; i < rowsCount; i++) {
      ans[j % 2 === 0 ? i : rowsCount - 1 - i][j] = this[index++];
    }
  }
  return ans;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
