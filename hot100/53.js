/*
53. 最大子数组和

给你一个整数数组 nums，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组是数组中的一个连续部分。
 */

var maxSubArray = function(nums) {
  const n = nums.length;
  // f[i] 表示以下标 i 结尾的连续子数组的最大和
  const f = [];
  f[0] = nums[0];
  for (let i = 1; i < n; i++) {
    f[i] = Math.max(nums[i], f[i - 1] + nums[i]);
  }
  return Math.max(...f);
};
