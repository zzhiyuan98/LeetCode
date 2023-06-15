/*
322. 零钱兑换

给你一个整数数组 coins，表示不同面额的硬币；以及一个整数 amount，表示总金额。

计算并返回可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

你可以认为每种硬币的数量是无限的。
 */

const coinChange = (coins, amount) => {
  // 定义 f[i] 为凑成金额 i 所需的最少硬币个数
  const f = [];
  f[0] = 0;
  for (let i = 1; i <= amount; i++) {
    let min = Infinity;
    coins.forEach(coin => {
      if (coin <= i && f[i - coin] !== -1) {
        min = Math.min(min, f[i - coin] + 1);
      }
    });
    f[i] = min === Infinity ? -1 : min;
  }
  return f[amount];
};

// expected output: 20
const coins = [186,419,83,408];
const amount = 6249;
console.log(coinChange(coins, amount));
