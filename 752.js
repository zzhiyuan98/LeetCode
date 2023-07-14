/*
752. 打开转盘锁

你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字：'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'。每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9'。每次旋转都只能旋转一个拨轮的一位数字。

锁的初始数字为 '0000'，一个代表四个拨轮的数字的字符串。

列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。

字符串 target 代表可以解锁的数字，你需要给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1。
 */

const getPrev = char => {
  const num = parseInt(char);
  const prev = num === 0 ? 9 : num - 1;
  return prev.toString();
};

const getNext = char => {
  const num = parseInt(char);
  const next = num === 9 ? 0 : num + 1;
  return next.toString();
};

const getStatus = status => {
  const res = [];
  for (let i = 0; i < 4; i++) {
    res.push(status.substring(0, i) + getPrev(status[i]) + status.substring(i + 1));
    res.push(status.substring(0, i) + getNext(status[i]) + status.substring(i + 1));
  }
  return res;
};

const openLock = function(deadends, target) {
  if (target === "0000") {
    return 0;
  }
  if (deadends.includes("0000")) {
    return -1;
  }
  const queue = [];
  queue.push("0000");
  const set = new Set();
  set.add("0000");
  let step = 0;
  while (queue.length) {
    step++;
    const size = queue.length;
    for (let i = 1; i <= size; i++) {
      const status = queue.shift();
      for (const nextStatus of getStatus(status)) {
        if (deadends.includes(nextStatus) || set.has(nextStatus)) {
          continue;
        }
        if (nextStatus === target) {
          return step;
        }
        queue.push(nextStatus);
        set.add(nextStatus);
      }
    }
  }
  return -1;
};

// 6
const deadends = ["0201","0101","0102","1212","2002"];
const target = "0202";
console.log(openLock(deadends, target));
