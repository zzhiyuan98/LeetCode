/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let prev = nums[0];
  let count = 1;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === prev) {
      if (count === 1) {
        nums[k] = nums[i];
        count++;
        k++;
      }
    } else {
      nums[k] = nums[i];
      prev = nums[i];
      count = 1;
      k++;
    }
  }
  return k;
};

const nums = [1,1,1,1,1,2,3,3]
console.log(removeDuplicates(nums));
console.log(nums);
