/*
2722. 根据 ID 合并两个数组

现给定两个数组 arr1 和 arr2 ，返回一个新的数组 joinedArray 。两个输入数组中的每个对象都包含一个 id 字段。joinedArray 是一个通过 id 将 arr1 和 arr2 连接而成的数组。joinedArray 的长度应为唯一值 id 的长度。返回的数组应按 id 升序 排序。

如果一个 id 存在于一个数组中但不存在于另一个数组中，则该对象应包含在结果数组中且不进行修改。

如果两个对象共享一个 id ，则它们的属性应进行合并：

如果一个键只存在于一个对象中，则该键值对应该包含在对象中。
如果一个键在两个对象中都包含，则 arr2 中的值应覆盖 arr1 中的值。
 */

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  const compareFn = (a, b) => a.id - b.id;
  const sorted1 = arr1.sort(compareFn);
  const sorted2 = arr2.sort(compareFn);
  let idx1 = 0;
  let idx2 = 0;
  const res = [];
  while (idx1 < sorted1.length && idx2 < sorted2.length) {
    const id1 = sorted1[idx1].id;
    const id2 = sorted2[idx2].id;
    if (id1 === id2) {
      const obj1 = sorted1[idx1++];
      const obj2 = sorted2[idx2++];
      res.push({ ...obj1, ...obj2 });
    } else if (id1 < id2) {
      res.push(sorted1[idx1++]);
    } else {
      res.push(sorted2[idx2++]);
    }
  }
  if (idx1 < sorted1.length) {
    res.push(...sorted1.slice(idx1));
  }
  if (idx2 < sorted2.length) {
    res.push(...sorted2.slice(idx2));
  }
  return res;
};

const arr1 = [{"id": 1,"x": 2,"y": 3},{"id": 2,"x": 3,"y": 6}];
const arr2 = [{"id": 2,"x": 10,"y": 20},{"id": 3,"x": 0,"y": 0}];
console.log(join(arr1, arr2));
