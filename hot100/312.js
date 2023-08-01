/*
312. 戳气球

有 n 个气球，编号为 0 到 n - 1，每个气球上都标有一个数字，这些数字存在数组 nums 中。

现在要求你戳破所有的气球。戳破第 i 个气球，你可以获得 nums[i - 1] * nums[i] * nums[i + 1] 枚硬币。这里的 i - 1 和 i + 1 代表和 i 相邻的两个气球的序号。如果 i - 1 或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球。

求所能获得硬币的最大数量。
*/

const maxCoins = nums => {
  // 首尾添加 1，便于处理边界情况
  const newNums = [1].concat(nums).concat([1]);
  const n = newNums.length;
  // dp[i][j] 表示开区间 (i, j) 内所能获得的最大硬币数量
  // 枚举 (i, j) 内的 k，k 为最后一个被戳破的气球下标
  // 则 dp[i][j] = max(dp[i][k] + nums[i] * nums[j] * nums[k] + dp[k][j])
  const dp = Array.from(Array(n), () => new Array(n).fill(0));
  const enumK = (i, j) => {
    let max = 0;
    for (let k = i + 1; k < j; k++) {
      const total = dp[i][k] + dp[k][j] + newNums[k] * newNums[i] * newNums[j];
      max = Math.max(max, total);
    }
    dp[i][j] = max;
  };
  for(let len = 2; len < n; len++) {
    for (let i = 0; i < n - len; i++) {
      enumK(i, i + len);
    }
  }
  return dp[0][n - 1];
};

// expected output: 116718
const nums = [9,76,64,21];
console.log(maxCoins(nums));
