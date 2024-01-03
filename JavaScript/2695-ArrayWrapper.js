/*
2695. 包装数组

创建一个名为 ArrayWrapper 的类，它在其构造函数中接受一个整数数组作为参数。该类应具有以下两个特性：

当使用 + 运算符将两个该类的实例相加时，结果值为两个数组中所有元素的总和。
当在实例上调用 String() 函数时，它将返回一个由逗号分隔的括在方括号中的字符串。例如，[1,2,3]。
 */

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
  this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
  return this.nums.reduce((prev, curr) => prev + curr, 0);
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
  return `[${this.nums.toString()}]`;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
