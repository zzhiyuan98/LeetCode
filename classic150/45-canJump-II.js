/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  const n = nums.length;
  // dp[i] 表示到达 nums[i] 处的最小跳跃次数
  const dp = Array(n).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= nums[i]; j++) {
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
    }
  }
  return dp[n - 1];
};

console.log(jump([1,2,3]));
