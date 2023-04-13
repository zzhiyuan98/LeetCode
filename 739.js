const dailyTemperatures = temperatures => {
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

const temperatures = [73,74,75,71,69,72,76,73];
console.log(dailyTemperatures(temperatures));
