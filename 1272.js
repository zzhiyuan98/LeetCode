/*
1272. 删除区间

给你一个有序的不相交区间列表 intervals 和一个要删除的区间 toBeRemoved，intervals 中的每一个区间 intervals[i] = [a, b] 都表示满足 a <= x < b 的所有实数 x 的集合。

我们将 intervals 中任意区间与 toBeRemoved 有交集的部分都删除。

返回删除所有交集区间后，intervals 剩余部分的有序列表。
*/

const removeInterval = (intervals, toBeRemoved) => {
  const ans = [];
  const [left, right] = toBeRemoved;
  for (const [start, end] of intervals) {
    if (start > right || end < left) ans.push([start, end]);
    else {
      if (start < left) ans.push([start, left]);
      if (end > right) ans.push([right, end]);
    }
  }
  return ans;
};

function main() {
  // expected output: [[0,1],[6,7]]
  const intervals = [[0,2],[3,4],[5,7]];
  const toBeRemoved = [1,6];
  console.log(removeInterval(intervals, toBeRemoved));
}
main()
