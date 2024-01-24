/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  return nums.sort()[Math.floor(nums.length / 2)];
};
