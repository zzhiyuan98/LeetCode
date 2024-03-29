/*
121. 买卖股票的最佳时机

给定一个数组 prices，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择某一天买入这只股票，并选择在未来的某一个不同的日子卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0。
 */

const maxProfit = prices => {
  let ans = 0;
  let min = Infinity;
  for (const price of prices) {
    if (price < min) {
      min = price;
    }
    else if (price - min > ans) {
      ans = price - min;
    }
  }
  return ans;
};

// 5
const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));
