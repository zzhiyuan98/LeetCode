var rob = function(nums) {
  const n = nums.length;
  if (n === 1) return nums[0];
  // f[i] 表示偷前 i 个房屋所获的最高金额
  const f = new Array(n + 1);
  f[0] = 0;
  f[1] = nums[0];
  for (let i = 2; i <= n; i++) {
    f[i] = Math.max(f[i - 1], f[i - 2] + nums[i - 1]);
  }
  return f[n];
};

const nums = [2,1,1,2];
console.log(rob(nums));
