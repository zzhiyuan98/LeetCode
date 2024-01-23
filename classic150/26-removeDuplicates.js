/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let prev = nums[0];
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== prev) {
      nums[k] = nums[i];
      prev = nums[i];
      k++;
    }
  }
  return k;
};

const nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));
console.log(nums);
