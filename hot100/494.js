/*
494. 目标和

给你一个整数数组 nums 和一个整数 target。

向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个表达式：

例如，nums = [2, 1]，可以在 2 之前添加 '+'，在 1 之前添加 '-'，然后串联起来得到表达式 ‘+ 2 - 1’。

返回可以通过上述方法构造的、运算结果等于 target 的不同表达式的数目。

提示：
  1 <= nums.length <= 20
  0 <= nums[i] <= 1000
  0 <= sum(nums[i]) <= 1000
  -1000 <= target <= 1000
*/

/*
记数组的元素和为 sum，添加减号的元素和为 neg，则添加加号的元素和为 sum - neg
得到表达式 (sum - neg) - neg = sum - 2 * neg = target
即 neg = (sum - target) / 2
*/

const findTargetSumWays = (nums, target) => {
  const sum = nums.reduce((prev, curr) => prev + curr, 0);
  const neg = (sum - target) / 2;
  if (neg < 0 || !Number.isInteger(neg)) return 0;
  // dp[i][j] 表示在数组前 i 个数中选取元素，使得这些元素之和等于 j 的方案数
  const n = nums.length;
  const dp = Array.from(Array(n + 1), () => new Array(neg + 1));
  dp[0][0] = 1;
  for (let j = 1; j <= neg; j++) {
    dp[0][j] = 0;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= neg; j++) {
      const num = nums[i - 1];
      if (j < num) {
        dp[i][j] = dp[i - 1][j];
      }
      else {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - num];
      }
    }
  }
  return dp[n][neg];
};

// expected output: 5
const nums = [1,1,1,1,1];
const target = 3;
console.log(findTargetSumWays(nums, target));
