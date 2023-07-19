const findContinuousSequence = function(target) {
  const ans = [];
  let left = 1;
  let right = 2;
  let sum = left + right;
  while (left < right) {
    if (sum === target) {
      ans.push(Array.from(Array(right - left + 1), (_, i) => left + i));
      sum -= left;
      left++;
    }
    else if (sum > target) {
      sum -= left;
      left++;
    }
    else {
      right++;
      sum += right;
    }
  }
  return ans;
};

// 输出：[[2,3,4],[4,5]]
const target = 9;
console.log(findContinuousSequence(target));
