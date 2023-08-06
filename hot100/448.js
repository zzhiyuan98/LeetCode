/*
448. 找到所有数组中消失的数字

给你一个含 n 个整数的数组 nums，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
 */

var findDisappearedNumbers = function(nums) {
  const n = nums.length;
  const seen = new Array(n).fill(false);
  for (const num of nums) {
    seen[num - 1] = true;
  }
  const ans = [];
  seen.forEach((e, i) => {
    if (!e) ans.push(i + 1);
  })
  return ans;
};

const nums = [4,3,2,7,8,2,3,1];
console.log(findDisappearedNumbers(nums));
