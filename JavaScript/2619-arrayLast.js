/*
2619. 数组原型对象的最后一个元素

请你编写一段代码实现一个数组方法，使任何数组都可以调用 array.last() 方法，这个方法将返回数组最后一个元素。如果数组中没有元素，则返回 -1。

你可以假设数组是 JSON.parse 的输出结果。
 */

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
  const arr = this;
  const n = arr.length;
  if (n === 0) {
    return -1;
  }
  return arr[n - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
