/*
2677. 分块数组

给定一个数组 arr 和一个块大小 size ，返回一个 分块 的数组。分块 的数组包含了 arr 中的原始元素，但是每个子数组的长度都是 size 。如果 arr.length 不能被 size 整除，那么最后一个子数组的长度可能小于 size 。

你可以假设该数组是 JSON.parse 的输出结果。换句话说，它是有效的JSON。

请你在不使用 lodash 的函数 _.chunk 的情况下解决这个问题。
 */

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  const quotient = Math.floor(arr.length / size);
  const remainder = arr.length % size;
  const ans = [];
  for (let i = 1; i <= quotient; i++) {
    ans.push(arr.slice((i - 1) * size, i * size));
  }
  if (remainder !== 0) {
    ans.push(arr.slice(-remainder))
  }
  return ans;
};

chunk([1,2,3,4,5], 2)
