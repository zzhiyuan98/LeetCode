/*
2626. 数组归约运算

请你编写一个函数，它的参数为一个整数数组 nums 、一个计算函数 fn 和初始值init 。返回一个数组 归约后 的值。

你可以定义一个数组 归约后 的值，然后应用以下操作： val = fn(init, nums[0]) ， val = fn(val, nums[1]) ， val = fn(val, nums[2]) ，... 直到数组中的每个元素都被处理完毕。返回 val 的最终值。

如果数组的长度为 0，它应该返回 init 的值。

请你在不使用内置数组方法的 Array.reduce 前提下解决这个问题。
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  let res = init;
  for (const num of nums) {
    res = fn(res, num);
  }
  return res;
};
