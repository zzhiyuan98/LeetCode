/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const n = nums.length;
  let maxIndex = 0;
  for (let i = 0; i < n; i++) {
    if (i > maxIndex) {
      return false;
    }
    maxIndex = Math.max(i + nums[i], maxIndex);
    if (maxIndex >= n - 1) {
      return true;
    }
  }
};

console.log(canJump([3,2,1,0,4]));
