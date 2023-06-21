/*
560. 和为 K 的子数组

给你一个整数数组 nums 和一个整数 k，请你统计并返回该数组中和为 k 的连续子数组的个数。
*/

const subarraySum = (nums, k) => {
  const preSum = [];
  preSum[0] = 0;
  for (let i = 1; i <= nums.length; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1];
  }
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (preSum[j] - preSum[i] === k) count++;
    }
  }
 return count;
};

const nums = [1,1,1];
const k = 2;
console.log(subarraySum(nums, k));
