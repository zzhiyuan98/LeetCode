// 定义 f[i] 为跳到 nums[i] 需要的最小跳跃次数
var jump = function(nums) {
  const f = [];
  f[0] = 0;
  f[1] = nums[0] >= 1 ? 1 : 0;
  for (let i = 2; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if ((j === 0 || f[j]) && nums[j] >= i - j) {
        f[i] = f[j] + 1;
        break;
      }
    }
  }
  return f[nums.length - 1];
};
