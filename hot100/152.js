/*
152. 乘积最大子数组

给你一个整数数组 nums，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

测试用例的答案是一个 32-位整数。

子数组是数组的连续子序列。
 */

const maxProduct = nums => {
    // 由于有负数存在，需要同时维护 max 和 min
    let prevMax = nums[0];
    let prevMin = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        const temp = prevMax * num;
        prevMax = Math.max(temp, num, prevMin * num);
        prevMin = Math.min(temp, num, prevMin * num);
        max = Math.max(max, prevMax);
    }
    return max;
};

const nums = [-4, -3, -2];
console.log(maxProduct(nums));
