/*
57. 插入区间

给出一个无重叠的 ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
*/

const insert = (intervals, newInterval) => {
  const n = intervals.length;
  const ans = [];
  let i = 0;
  while (i < n) {
    if (intervals[i][1] < newInterval[0]) ans.push(intervals[i++]);
    else break;
  }
  let [start, end] = newInterval;
  while (i < n && intervals[i][0] <= end) {
    start = Math.min(intervals[i][0], start);
    end = Math.max(intervals[i][1], end);
    i++;
  }
  ans.push([start, end]);
  while (i < n) {
    ans.push(intervals[i++]);
  }
  return ans;
};

const intervals = [];
const newInterval = [4,8];
console.log(insert(intervals, newInterval));
