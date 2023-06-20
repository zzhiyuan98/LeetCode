/*
416. 分割等和子集

给你一个只包含正整数的非空数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
*/

const canPartition = nums => {
  const n = nums.length;
  if (n < 2) return false;
  const sum = nums.reduce((prev, curr) => prev + curr, 0);
  if (sum % 2 !== 0) return false;
  const target = sum / 2
  if (Math.max(...nums) > target) return false;

  // dp[i][j] 表示从数组的 [0,i] 内取若干个数（可以是 0 个），是否能使和为 j
  const dp = Array.from(Array(n), () => new Array(target + 1).fill(false));
  dp[0][nums[0]] = true;
  for (let i = 0; i < n; i++) {
    dp[i][0] = true;
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= target; j++) {
      if (j < nums[i]) {
        dp[i][j] = dp[i - 1][j];
      }
      else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      }
    }
  }
  return dp[n - 1][target];
};

const nums = [1,5,11,5];
console.log(canPartition(nums));
