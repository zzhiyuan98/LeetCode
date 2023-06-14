/*
207. 课程表

你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则必须先学习课程 bi 。

例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。
 */

const canFinish = (numCourses, prerequisites) => {
  const inDegree = new Array(numCourses).fill(0);
  const map = new Map();
  for (let i = 0; i < prerequisites.length; i++) {
    const [a, b] = prerequisites[i];
    inDegree[a]++;
    if (map.has(b)) map.get(b).push(a);
    else map.set(b, [a]);
  }
  const queue = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  let count = 0;
  while (queue.length) {
    const course = queue.shift();
    count++;
    if (!map.has(course)) continue;
    const courses = map.get(course);
    courses.forEach(course => {
      inDegree[course]--;
      if (inDegree[course] === 0) queue.push(course);
    });
  }
  return count === numCourses;
};

const numCourses = 2;
const prerequisites = [[1, 0], [0, 1]];
console.log(canFinish(numCourses, prerequisites));
