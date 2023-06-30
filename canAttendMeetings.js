/*
252. 会议室

给定一个会议时间安排的数组 intervals，每个会议时间都会包括开始和结束的时间 intervals[i] = [start_i, end_i]，请你判断一个人是否能够参加这里面的全部会议。
*/

const canAttendMeetings = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= intervals[i - 1][1]) return false;
  }
  return true;
};

const intervals = [[0,30],[5,10],[15,20]];
console.log(canAttendMeetings(intervals));
