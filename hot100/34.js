/*
34. 在排序数组中查找元素的第一个和最后一个位置

给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 */

const searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const num = nums[mid];
    if (num === target) {
      left = mid;
      right = mid;
      while (left > 0 && nums[left - 1] === target) {
        left--;
      }
      while (right < nums.length - 1 && nums[right + 1] === target) {
        right++;
      }
      return [left, right];

    }
    if (num < target) {
      left = mid + 1;
    }
    else {
      right = mid - 1;
    }
  }
  return [-1, -1];
};
