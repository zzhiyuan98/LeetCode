/* 1. 两数之和 */

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === target - nums[i]) return [i, j];
        }
    }
};
