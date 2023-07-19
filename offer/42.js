const maxSubArray = function(nums) {
  // dp[i] 表示以下标 i 为结尾的子数组的和的最大值
  const dp = [];
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }
  return Math.max(...dp);
};
