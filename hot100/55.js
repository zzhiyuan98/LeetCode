/*
55. 跳跃游戏

给定一个非负整数数组 nums ，你最初位于数组的第一个下标。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。
 */

const canJump = nums => {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > max) return false;
    max = Math.max(max, i + nums[i]);
  }
  return true;
};
