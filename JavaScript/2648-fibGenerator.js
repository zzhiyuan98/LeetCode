/*
2648. 生成斐波那契数列

请你编写一个生成器函数，并返回一个可以生成斐波那契数列的生成器对象。

斐波那契数列 的递推公式为 Xn = Xn-1 + Xn-2。

这个数列的前几个数字是 0, 1, 1, 2, 3, 5, 8, 13。
 */

/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
  let first = 0;
  let second = 1;
  for (let i = 0;;i++) {
    yield first;
    const sum = first + second;
    first = second;
    second = sum;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
