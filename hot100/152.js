const maxProduct = nums => {
    // 定义 dp[i] 为包含 nums[i] 的连续数组最大乘积
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
