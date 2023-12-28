/*
2644. 找出可整除性得分最大的整数

给你两个下标从 0 开始的整数数组 nums 和 divisors。

divisors[i] 的可整除性得分等于满足 nums[j] 能被 divisors[i] 整除的下标 j 的数量。

返回可整除性得分最大的整数 divisors[i] 。如果有多个整数具有最大得分，则返回数值最小的一个。
 */

/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
  let maxScore = -Infinity;
  let ans = Infinity;
  for (const divisor of divisors) {
    let count = 0;
    nums.forEach(num => {
      if (num % divisor === 0) {
        count++;
      }
    })
    if (count > maxScore) {
      ans = divisor;
      maxScore = count;
    }
    if (count === maxScore) {
      ans = Math.min(ans, divisor);
    }
  }
  return ans;
};
