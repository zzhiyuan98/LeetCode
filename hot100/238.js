/*
238. 除自身以外数组的乘积

给你一个整数数组 nums，返回数组 answer，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

题目数据 保证 数组 nums 之中任意元素的全部前缀元素和后缀的乘积都在 32 位整数范围内。

请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 */

const productExceptSelf = nums => {
  const L = [];
  const R = [];
  L[0] = 1;
  R[nums.length - 1] = 1;
  for (let i = 1; i < nums.length; i++) {
    L[i] = L[i - 1] * nums[i - 1];
    R[nums.length - 1 - i] = R[nums.length - i] * nums[nums.length - i];
  }
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    answer.push(L[i] * R[i]);
  }
  return answer;
};

const nums = [1,2,3,4];
console.log(productExceptSelf(nums));
