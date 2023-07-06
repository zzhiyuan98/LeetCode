const combinationSum = (candidates, target) => {
  const ans = [];
  const dfs = (output, target, begin) => {
    if (target === 0) {
      ans.push(output);
      return;
    }
    if (target < 0) return;
    for (let i = begin; i < candidates.length; i++) {
      const candidate = candidates[i];
      dfs(output.concat(candidate), target - candidate, i);
    }
  };
  dfs([], target, 0);
  return ans;
};

// expected output: [[2, 2, 3], [7]]
const candidates = [2, 3, 6, 7];
const target = 7;
console.log(combinationSum(candidates, target));
