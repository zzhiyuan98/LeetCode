/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = -Infinity;
  let prevMin = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    prevMin = Math.min(prevMin, price);
    max = Math.max(price - prevMin, max);
  }
  return Math.max(0, max);
};
