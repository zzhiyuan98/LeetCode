/*
1311. 获取你好友已观看的视频

有 n 个人，每个人都有一个 0 到 n - 1 的唯一 id。

给你数组 watchedVideos 和 friends，其中 watchedVideos[i] 和 friends[i] 分别表示 id = i 的人观看过的视频列表和他的好友列表。

Level 1 的视频包含所有你好友观看过的视频，level 2 的视频包含所有你好友的好友观看过的视频，以此类推。一般的，Level 为 k 的视频包含所有从你出发，最短距离为 k 的好友观看过的视频。

给定你的 id 和一个 level 值，请你找出所有指定 level 的视频，并将它们按观看频率升序返回。如果有频率相同的视频，请将它们按字母顺序从小到大排列。
 */

const watchedVideosByFriends = function(watchedVideos, friends, id, level) {
  const visited = new Array(friends.length).fill(false);
  const ids = [id];
  visited[id] = true;
  for (let i = 1; i <= level; i++) {
    const size = ids.length;
    for (let i = 1; i <= size; i++) {
      const id = ids.shift();
      for (const newId of friends[id]) {
        if (!visited[newId]) {
          ids.push(newId);
          visited[newId] = true;
        }
      }
    }
  }
  const cnt = new Map();
  for (const id of ids) {
    const videos = watchedVideos[id];
    videos.forEach(video => {
      const count = cnt.has(video) ? cnt.get(video) + 1 : 1;
      cnt.set(video, count);
    });
  }
  const compareFn = (a, b) => a[1] === b[1] ? a[0].localeCompare(b[0]) : a[1] - b[1];
  return [...cnt.entries()].sort(compareFn).map(e => e[0]);
};

// ["D"]
const watchedVideos = [["A","B"],["C"],["B","C"],["D"]];
const friends = [[1,2],[0,3],[0,3],[1,2]];
const id = 0;
const level = 2;
console.log(watchedVideosByFriends(watchedVideos, friends, id, level));
