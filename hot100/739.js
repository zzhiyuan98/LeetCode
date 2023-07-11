/*
739. 每日温度

给定一个整数数组 temperatures，表示每天的温度，返回一个数组 answer，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 */

// 暴力 O(n^2) O(1)
const dailyTemperatures1 = temperatures => {
  const ans = [];
  for (let i = 0; i < temperatures.length; i++) {
    const current = temperatures[i];
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > current) {
        ans[i] = j - i;
        break;
      }
    }
    if (ans[i] === undefined) ans[i] = 0;
  }
  return ans;
};

// 单调栈 O(n) O(n)
const dailyTemperatures = temperatures => {
  const n = temperatures.length;
  const ans = new Array(n).fill(0);
  const stack = [];
  const getTop = () => stack[stack.length - 1][0];
  for (let i = 0; i < n; i++) {
    while (stack.length && temperatures[i] > getTop()) {
      const prevIndex = stack.pop()[1];
      ans[prevIndex] = i - prevIndex;
    }
    stack.push([temperatures[i], i]);
  }
  return ans;
};

const temperatures = [73,74,75,71,69,72,76,73];
console.log(dailyTemperatures(temperatures));
