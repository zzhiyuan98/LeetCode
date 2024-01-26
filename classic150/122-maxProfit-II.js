/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const n = prices.length;
  const dp = Array.from(Array(n), () => new Array(2));
  /*
    dp[i][0]：持有
    dp[i][1]：不持有
   */
  dp[0] = [-prices[0], 0]
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }
  return Math.max(...dp[n - 1]);
};

console.log(maxProfit([7,1,5,3,6,4]));
