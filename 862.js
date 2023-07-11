/*
862. 和至少为 K 的最短子数组

给你一个整数数组 nums 和一个整数 k，找出 nums 中和至少为 k 的最短非空子数组，并返回该子数组的长度。如果不存在这样的子数组，返回 -1。

子数组是数组中连续的一部分。
 */

var shortestSubarray = function(nums, k) {
  const n = nums.length;
  // 前 i 个元素的和
  const preSum = [];
  preSum[0] = 0;
  for (let i = 1; i <= n; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1];
  }
  let min = Infinity;
  // 下标 i 开始长度为 len 的子数组的和
  for (let i = 0; i < n; i++) {
    for (let len = 1; i + len <= n; len++) {
      if (preSum[i + len] - preSum[i] >= k) {
        min = Math.min(min, len);
      }
    }
  }
  return min === Infinity ? -1 : min;
};

// 3
const nums = [84,-37,32,40,95];
const k = 167;
console.log(shortestSubarray(nums, k));
