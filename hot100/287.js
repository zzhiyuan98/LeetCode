/*
287. 寻找重复数

给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。

假设 nums 只有一个重复的整数，返回这个重复的数。

你设计的解决方案必须不修改数组 nums 且只用常量级 O(1) 的额外空间。
*/

const findDuplicate = nums => {
  // 建立 nums 下标 i 到 nums[i] 的映射关系 f(i)，形成链表
  // 使用快慢指针找到链表成环的地方
  let slow = 0;
  let fast = 0;
  while (true) {
   slow = nums[slow];
   fast = nums[nums[fast]];
   if (slow === fast) break;
  }
  let finder = 0;
  while (finder !== slow) {
    finder = nums[finder];
    slow = nums[slow];
  }
  return finder;
};

// expected output: 2
const nums = [1,3,4,2,2];
console.log(findDuplicate(nums));
