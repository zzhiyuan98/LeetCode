/*
2649. 嵌套数组生成器

现给定一个整数的多维数组 ，请你返回一个生成器对象，按照 中序遍历 的顺序逐个生成整数。

多维数组是一个递归数据结构，包含整数和其他多维数组。

中序遍历是从左到右遍历每个数组，在遇到任何整数时生成它，遇到任何数组时递归应用中序遍历。
 */

/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
  for (const ele of arr) {
    if (Array.isArray(ele)) {
      yield* inorderTraversal(ele);
    } else {
      yield ele;
    }
  }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */

const gen = inorderTraversal([[[[1,2,3]]]]);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
