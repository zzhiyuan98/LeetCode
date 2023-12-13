/*
2618. 检查是否是类的对象实例

请你编写一个函数，检查给定的值是否是给定类或超类的实例。

可以传递给函数的数据类型没有限制。例如，值或类可能是 undefined。
 */

var checkIfInstanceOf = function(obj, classFunction) {
  if (obj === undefined || obj === null || typeof classFunction !== "function") {
    return false;
  }
  return Object(obj) instanceof classFunction;
};
