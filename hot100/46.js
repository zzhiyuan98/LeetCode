const permute = nums => {
  const ans = [];
  const dfs = (output, rest) => {
    if (output.length === nums.length) {
      ans.push(output);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      const curr = rest[i];
      const newRest = rest.slice(0, i).concat(rest.slice(i + 1));
      dfs(output.concat(curr), newRest);
    }
  };
  dfs([], nums);
  return ans;
};

// expected output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
const nums = [1,2,3];
console.log(permute(nums));
