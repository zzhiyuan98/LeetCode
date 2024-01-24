/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const reverse = (nums, start, end) => {
    let left = start;
    let right = end;
    while (left < right) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  };
  const n = nums.length;
  reverse(nums, 0, n - 1);
  reverse(nums, 0, k % n - 1);
  reverse(nums, k % n, n - 1);
};

// [4,5,6,7,8,9,1,2,3]
const nums = [1,2,3,4,5,6,7,8,9];
const k = 6;
rotate(nums, k);
console.log(nums);
