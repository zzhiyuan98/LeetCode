/*
416. 分割等和子集

给你一个只包含正整数的非空数组 nums。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
*/

const canPartition = nums => {
  const n = nums.length;
  const sum = nums.reduce((prev, curr) => prev + curr, 0);
  const target = sum / 2;
  if (!Number.isInteger(target) || nums.some(value => value > target)) {
    return false;
  }
  // dp[i][j] 表示选取 nums 里的前 i 个数，是否可以使和为 j
  const dp = Array.from(Array(n + 1), () => new Array(target + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      const num = nums[i - 1];
      if (dp[i - 1][j] || (num <= j && dp[i - 1][j - num])) {
        dp[i][j] = true;
      }
    }
  }
  return dp[n][target];
};

const nums = [1,5,11,5];
console.log(canPartition(nums));
