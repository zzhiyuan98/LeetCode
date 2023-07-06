const subsets = nums => {
  const ans = [];
  const n = nums.length;
  const dfs = (output, start) => {
    ans.push(output);
    if (output.length === nums.length) return;
    for (let i = start; i < nums.length; i++) {
      const num = nums[i];
      if (!output.includes(num)) {
        dfs(output.concat(num), i);
      }
    }
  };
  dfs([], 0);
  return ans;
};

// expected output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
const nums = [1,2,3];
console.log(subsets(nums));
