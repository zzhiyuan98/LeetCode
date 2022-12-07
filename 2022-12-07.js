/* 1775. 通过最少操作次数使数组的和相等 */

// 获取数组元素之和
const getArraySum = nums => {
  let sum = 0;
  nums.forEach(num => sum += num);
  return sum;
};

// 返回一个 counter，其中 counter[0] 代表数组中 1 的数量，counter[1] 代表 2 的数量，以此类推
const getCounter = nums => {
  const counter = Array.from({ length: 6 }, () => 0);
  nums.forEach(num => counter[num - 1]++);
  return counter;
};

// 返回一个总计数器，其中 count[0] 代表总和较小的数组 1 的数量加总和较大的数组 6 的数量，以此类推
const getTotalCount = (counter1, counter2) => {
  const count = [];
  for (let i = 0; i < 6; i++ ) {
    count.push(counter1[i] + counter2[5 - i]);
  }
  return count;
};

const minOperations = (nums1, nums2) => {
  const sum1 = getArraySum(nums1);
  const sum2 = getArraySum(nums2);
  let diff = Math.abs(sum1 - sum2);
  if (diff === 0) return 0;
  const isFirstArrayBigger = sum1 > sum2;
  const counter1 = getCounter(nums1);
  const counter2 = getCounter(nums2);
  const totalCount = getTotalCount(isFirstArrayBigger ? counter2 : counter1, isFirstArrayBigger ? counter1 : counter2);
  let result = 0;
  for (let i = 0; i < totalCount.length; i++) {
    const available = totalCount[i] * (5 - i);
    if (diff > available) {
      diff -= available;
      result += totalCount[i];
      continue;
    }
    result += Math.ceil(diff / (5 - i));
    diff = 0;
    break;
  }
  return diff === 0 ? result : -1;
};
