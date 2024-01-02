/*
2653. 滑动子数组的美丽值

给你一个长度为 n 的整数数组 nums，请你求出每个长度为 k 的子数组的美丽值 。

一个子数组的美丽值定义为：如果子数组中第 x 小整数是负数 ，那么美丽值为第 x 小的数，否则美丽值为 0。

请你返回一个包含 n - k + 1 个整数的数组，依次表示数组中从第一个下标开始，每个长度为 k 的子数组的美丽值。

子数组指的是数组中一段连续非空的元素序列。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var getSubarrayBeauty = function(nums, k, x) {
  const ans = [];
  let left = 0;
  let right = left + k;
  const getNthSmallest = (arr) => arr.sort((a, b) => a - b)[x - 1];
  while (right <= nums.length) {
    const value = getNthSmallest(nums.slice(left, right));
    ans.push(value < 0 ? value : 0);
    left++;
    right++;
  }
  return ans;
};

const nums = [1,-1,-3,-2,3];
const k = 3;
const x = 2;
console.log(getSubarrayBeauty(nums, k, x));
