/*
406. 根据身高重建队列

假设有打乱顺序的一群人站成一个队列，数组 people 表示队列中一些人的属性（不一定按顺序）。每个 people[i] = [hi, ki] 表示第 i 个人的身高为 hi，前面正好有 ki 个身高大于或等于 hi 的人。

请你重新构造并返回输入数组 people 所表示的队列。返回的队列应该格式化为数组 queue，其中 queue[j] = [hj, kj] 是队列中第 j 个人的属性（queue[0] 是排在队列前面的人）。
*/

const reconstructQueue = people => {
  const compare = (a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0];

  people.sort(compare);
  const queue = Array(people.length);
  people.forEach((person) => {
    let count = person[1];
    let index = 0;
    while (count) {
      if (queue[index] === undefined) count--;
      index++;
    }
    while (queue[index]) {
      index++;
    }
    queue[index] = person;
  });
  return queue;
};

// expected output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
const people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]];
console.log(reconstructQueue(people));
