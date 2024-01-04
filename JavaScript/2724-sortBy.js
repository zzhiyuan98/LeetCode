/*
2724. 排序方式

给定一个数组 arr 和一个函数 fn，返回一个排序后的数组 sortedArr。你可以假设 fn 只返回数字，并且这些数字决定了 sortedArr 的排序顺序。sortedArr 必须按照 fn 的输出值升序排序。

你可以假设对于给定的数组，fn 不会返回重复的数字。
 */

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};
