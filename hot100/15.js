/*
15. 三数之和

给你一个整数数组 nums，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k，同时还满足 nums[i] + nums[j] + nums[k] == 0。

请你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。
 */

// 排序 + 双指针
const threeSum = nums => {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const ans = [];
  for (let i = 0; i < n ; i++) {
    if (nums[i] > 0) {
      return ans;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
      else if (sum > 0) {
        right--;
      }
      else {
        left++;
      }
    }
  }
  return ans;
};

// [[-1,-1,2], [-1,0,1]]
const nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));
