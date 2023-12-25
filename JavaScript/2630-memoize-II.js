/*
2630. 记忆函数 II

现给定一个函数 fn ，返回该函数的一个 记忆化 版本。

一个 记忆化 的函数是一个函数，它不会被相同的输入调用两次。而是会返回一个缓存的值。

函数 fn 可以是任何函数，对它所接受的值类型没有任何限制。如果两个输入值在 JavaScript 中使用 === 运算符比较时相等，则它们被视为相同。
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const map = new Map();
  const argsMap = new Map();
  const isSame = (key, args) => {
    if (!argsMap.has(key)) {
      return false;
    }
    const cachedArgs = argsMap.get(key);
    if (cachedArgs.length !== args.length) {
      return false;
    }
    return args.every((e, i) => e === cachedArgs[i]);
  };
  const generateKey = arr => arr.map(e => JSON.stringify(e) || typeof e).toString();
  return function(...args) {
    const key = generateKey(args);
    if (map.has(key) && isSame(key, args)) {
      return map.get(key);
    }
    const result = fn(...args);
    map.set(key, result);
    argsMap.set(key, args);
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
const memoizedFn = memoize((a, b) => {
  callCount++;
  return { ...a, ...b };
});
const o = {};
console.log(memoizedFn(o, o), callCount);
console.log(memoizedFn(o, {}), callCount);
console.log(memoizedFn(o, o), callCount);

function mytest(...args) {
  const generateKey = arr => arr.map(e => JSON.stringify(e) || typeof e).toString();
  console.log("args.length", args.length, args, "key", generateKey(args));
}

mytest(o, {});
mytest(o, o);
