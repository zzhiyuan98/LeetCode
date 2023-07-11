/*
724. 寻找数组的中心下标

给你一个整数数组 nums，请计算数组的中心下标 。

数组中心下标是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。

如果中心下标位于数组最左端，那么左侧数之和视为 0，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。

如果数组有多个中心下标，应该返回最靠近左边的那一个。如果数组不存在中心下标，返回 -1。
 */

// 前缀和
// sum_left = sum_total - nums[i] - sum_left
// 2 * sum_left + nums[i] = sum_total
var pivotIndex = function(nums) {
  const total = nums.reduce((prev, curr) => prev + curr, 0);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (2 * sum + nums[i] === total) {
      return i;
    }
    sum += nums[i];
  }
  return -1;
};

// 0
const nums = [2, 1, -1];
console.log(pivotIndex(nums));
