const lengthOfLIS = nums => {
  /*
  f[i] 为 nums.slice(0, i + 1) 里包含 nums[i] 的最长子序列长度
   */
  const f = [];
  f[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    let max = -Infinity;
    for (let j = 0; j < i; j++) {
      const temp = num > nums[j] ? f[j] + 1 : 1;
      max = Math.max(max, temp);
    }
    f[i] = max;
  }
  return Math.max(...f);
};

const nums = [10,9,2,5,3,7,101,18];
console.log(lengthOfLIS(nums));
