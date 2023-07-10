const maxProfit = prices => {
  // 使用滑动数组优化
  let pre = [-prices[0], 0, 0];
  for (let i = 1; i < prices.length; i++) {
    const temp = [];
    temp[0] = Math.max(pre[0], pre[2] - prices[i]);
    temp[1] = pre[0] + prices[i];
    temp[2] = Math.max(pre[1], pre[2]);
    pre = temp;
  }
  return Math.max(pre[1], pre[2]);
};

/*

const maxProfit = prices => {
  // f[i] = 第 i 天
  // f[i][0] = 第 i 天结束后持有股票（前一天已有股票或当日买入）的最大收益
  // f[i][1] = 第 i 天结束后不持有股票，第 i 天结束后为冷冻期（当日卖出）的最大收益
  // f[i][2] = 第 i 天结束后不持有股票，第 i 天结束后不为冷冻期（当日无买卖）的最大收益
  const n = prices.length;
  const f =[];
  f[0] = [-prices[0], 0, 0];
  for (let i = 1; i < n; i++) {
    f[i] = [];
    f[i][0] = Math.max(f[i - 1][0], f[i - 1][2] - prices[i]);
    f[i][1] = f[i - 1][0] + prices[i];
    f[i][2] = Math.max(f[i - 1][1], f[i - 1][2]);
  }
  return Math.max(f[n - 1][1], f[n - 1][2]);
};

*/

const prices = [1,2,3,0,2];
console.log(maxProfit(prices));
