/*
56. 合并区间

以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [start_i, end_i]。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 */

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
