/*
2623. 记忆函数

请你编写一个函数，它接收另一个函数作为输入，并返回该函数的 记忆化 后的结果。

记忆函数 是一个对于相同的输入永远不会被调用两次的函数。相反，它将返回一个缓存值。

你可以假设有 3 个可能的输入函数：sum 、fib 和 factorial 。

 sum 接收两个整型参数 a 和 b ，并返回 a + b 。
 fib 接收一个整型参数 n ，如果 n <= 1 则返回 1，否则返回 fib (n - 1) + fib (n - 2)。
 factorial 接收一个整型参数 n ，如果 n <= 1 则返回  1 ，否则返回 factorial(n - 1) * n 。
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const map = new Map();
  const generateKey = arr => arr.toString();
  return function(...args) {
    const key = generateKey(args);
    if (map.has(key)) {
      return map.get(key);
    }
    const result = fn(...args);
    map.set(key, result);
    return result;
  }
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */


let callCount = 0;
const memoizedSum = memoize((a, b) => {
  callCount += 1;
  return a + b;
});
console.log(memoizedSum(1,3));
console.log(callCount);
console.log(memoizedSum(3,1));
console.log(memoizedSum(10,10));
console.log(callCount);
