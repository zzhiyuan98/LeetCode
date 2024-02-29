/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return ans;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    const twoSumResult = twoSum(nums.slice(i + 1), -nums[i]);
    twoSumResult.forEach(twoSumArr => {
      ans.push([nums[i]].concat(twoSumArr));
    })
  }
  return ans;
};

function twoSum(numbers, target) {
  const ans = [];
  const n = numbers.length;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      ans.push([numbers[left], numbers[right]]);
      while (left < right && numbers[left] === numbers[left + 1]) {
        left++;
      }
      while (left < right && numbers[right] === numbers[right - 1]) {
        right--;
      }
      left++;
      right--;
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return ans;
}

const nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4];
console.log(threeSum(nums));
