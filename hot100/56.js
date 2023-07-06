/* 合并所有重叠区间，返回不重叠的区间 */
const merge = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);
  const ans = [];
  ans.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const prev = ans[ans.length - 1];
    const prevEnd = prev[1];
    if (start > prevEnd) {
      ans.push([start, end]);
    }
    else {
      prev[1] = Math.max(prevEnd, end);
    }
  }
  return ans;
};

// expected output: [[2,7]]
const intervals = [[2,3],[4,6],[5,7],[3,4]]
console.log(merge(intervals));
