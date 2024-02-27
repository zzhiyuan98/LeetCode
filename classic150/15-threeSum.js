/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const ans = [];
  nums.sort();
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const prev = i > 0 ? nums[i - 1] : null;
    if (curr === prev) {
      continue;
    }
    const twoSumResult = twoSum(nums.slice(0, i).concat(nums.slice(i + 1)), -curr);
    console.log(curr, twoSumResult)
    twoSumResult.forEach(twoSumArr => {
      ans.push([curr].concat(twoSumArr));
    })
  }
  return ans;
};

function twoSum(numbers, target) {
  const ans = [];
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    const sum = numbers[i] + numbers[j];
    if (sum === target) {
      ans.push([numbers[i], numbers[j]]);
      do {
        i++;
      } while (i < j && numbers[i] === numbers[i - 1]);
      do {
        j--;
      } while (i < j && numbers[j] === numbers[j + 1]);
    }
    else if (sum > target) {
      j--;
    } else {
      i++;
    }
  }
  return ans;
}

const nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4];
console.log(threeSum(nums));
console.log(twoSum([-4,0,0,1,2,3,4], 3))
