/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  const n = nums.length;
  let left = 0;
  let right = 0;
  let sum = 0;
  let min = Infinity;
  while (right < n) {
    sum += nums[right];
    if (sum >= target) {
      while (sum - nums[left] >= target) {
        sum -= nums[left];
        left++;
      }
      min = Math.min(right - left  + 1, min);
    }
    right++;
  }
  return min === Infinity ? 0 : min;
};

console.log(minSubArrayLen(15, [1,2,3,4,5]));
