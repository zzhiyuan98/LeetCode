/*
18. 四数之和

给你一个由 n 个整数组成的数组 nums ，和一个目标值 target。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]]（若两个四元组元素一一对应，则认为两个四元组重复）：

0 <= a, b, c, d < n
a、b、c 和 d 互不相同
nums[a] + nums[b] + nums[c] + nums[d] == target
你可以按任意顺序返回答案 。
 */

var fourSum = function(nums, target) {
  if (nums.length < 4) {
    return [];
  }
  const ans = [];
  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[j - 1] && j !== i + 1) {
        continue;
      }
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          ans.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        }
        else if (sum > target) {
          right--;
        }
        else {
          left++;
        }
      }
    }
  }
  return ans;
};

// [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
const nums = [1,0,-1,0,-2,2];
const target = 0;
console.log(fourSum(nums, target));
