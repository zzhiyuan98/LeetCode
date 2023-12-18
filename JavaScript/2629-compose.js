/*
2629. 复合函数

请你编写一个函数，它接收一个函数数组 [f1, f2, f3，…， fn] ，并返回一个新的函数 fn ，它是函数数组的 复合函数 。

[f(x)， g(x)， h(x)] 的 复合函数 为 fn(x) = f(g(h(x))) 。

一个空函数列表的 复合函数 是 恒等函数 f(x) = x 。

你可以假设数组中的每个函数接受一个整型参数作为输入，并返回一个整型作为输出。
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  return function(x) {
    let res = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      res = functions[i](res);
    }
    return res;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
