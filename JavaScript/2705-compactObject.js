/*
2705. 精简对象

现给定一个对象或数组 obj，返回一个 精简对象 。精简对象 与原始对象相同，只是将包含 假 值的键移除。该操作适用于对象及其嵌套对象。数组被视为索引作为键的对象。当 Boolean(value) 返回 false 时，值被视为 假 值。

你可以假设 obj 是 JSON.parse 的输出结果。换句话说，它是有效的 JSON。
 */

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
  if (typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.filter(e => Boolean(e)).map(e => compactObject(e));
  }
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (Boolean(value)) {
      newObj[key] = compactObject(value);
    }
  }
  return newObj;
};

const obj = [null, 0, false, 1];
console.log(compactObject(obj));
