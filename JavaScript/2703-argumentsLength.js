/*
2703. 返回传递的参数的长度

请你编写一个函数 argumentsLength，返回传递给该函数的参数数量。
 */

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
  return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
