/*
任务混部
 */

// 差分数组
const calServers = tasks => {
  const min = Math.min(...tasks.map(task => task[0]));
  const max = Math.max(...tasks.map(task => task[1]));
  const size = max - min + 1;
  const diff = new Array(size).fill(0);
  for (const task of tasks) {
    const [start, end, parallelism] = task;
    diff[start - min] += parallelism;
    if (end + 1 - min < size) {
      diff[end + 1 - min] -= parallelism;
    }
  }
  const servers = new Array(size).fill(0);
  servers[0] = diff[0];
  for (let i = 1; i < diff.length; i++) {
    servers[i] = diff[i] + servers[i - 1];
  }
  return Math.max(...servers);
};

const tasks = [[3,9,2],[4,7,3]];
console.log(calServers(tasks));

export default calServers;
