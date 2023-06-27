const longestConsecutive = nums => {
  if (nums.length === 0) return 0;
  nums.sort((a,b) => a - b);
  // 新的数字要么和旧的形成连续序列，要么新起一个
  // 定义 f[i] 为包含 nums[i] 的最长序列长度
  const f = [];
  f[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    if (diff === 1) f[i] = f[i - 1] + 1
    else if (diff === 0) f[i] = f[i - 1];
    else f[i] = 1;
  }
  return Math.max(...f);
};

const nums = [1,2,0,1];
console.log(longestConsecutive(nums));
