/*
621. 任务调度器

给你一个用字符数组 tasks 表示的 CPU 需要执行的任务列表。其中每个字母表示一种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。在任何一个单位时间，CPU 可以完成一个任务，或者处于待命状态。

然而，两个相同种类 的任务之间必须有长度为整数 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。

你需要计算完成所有任务所需要的最短时间。
*/

const leastInterval = (tasks, n) => {
  const cnt = new Map();
  for (const task of tasks) {
    const count = cnt.has(task) ? cnt.get(task) + 1 : 1;
    cnt.set(task, count);
  }
  let max = -Infinity;
  let maxCount = 0;
  for (const value of cnt.values()) {
    if (value > max) {
      max = value;
      maxCount = 1;
    }
    else if (value === max) maxCount++;
  }
  return Math.max(tasks.length, (max - 1) * (n + 1) + maxCount);
};

// expected output: 8
const tasks = ["A", "A", "A", "B", "B", "B"];
const n = 2;
console.log(leastInterval(tasks, n));
