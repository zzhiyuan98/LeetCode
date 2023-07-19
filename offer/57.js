var twoSum = function(nums, target) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [nums[left], nums[right]];
    }
    if (sum > target) {
      right--;
    }
    else {
     left++;
    }
  }
};

const nums = [2,7,11,15];
const target = 9;
console.log(twoSum(nums, target));
