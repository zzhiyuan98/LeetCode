/*
209. 长度最小的子数组

给定一个含有 n 个正整数的数组和一个正整数 target。

找出该数组中满足其和 ≥ target 的长度最小的连续子数组 [nums_l, nums_l+1, ..., nums_r-1, nums_r]，并返回其长度。如果不存在符合条件的子数组，返回 0。
 */

var minSubArrayLen = function(target, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let min = Infinity;
  while (right < nums.length) {
    sum += nums[right];
    right++;
    while (sum >= target) {
      min = Math.min(min, right - left);
      sum -= nums[left];
      left++;
    }
  }
  return min === Infinity ? 0 : min;
};

// 2
const target = 7;
const nums = [2,3,1,2,4,3];
console.log(minSubArrayLen(target, nums));
