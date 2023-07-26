/*
78. 子集

给你一个整数数组 nums，数组中的元素互不相同。返回该数组所有可能的子集（幂集）。

解集不能包含重复的子集。你可以按任意顺序返回解集。
 */

const subsets = function(nums) {
  const ans = [];
  const dfs = (nums, output, n, start) => {
    if (output.length === n) {
      ans.push(output);
    }
    for (let i = start; i < nums.length; i++) {
      dfs(nums.slice(0, i).concat(nums.slice(i + 1)), output.concat(nums[i]), n, i);
    }
  };
  for (let i = 0; i <= nums.length; i++) {
    dfs(nums, [], i, 0);
  }
  return ans;
};

const subsets1 = nums => {
  const ans = [];
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
