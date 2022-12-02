/* 1769. 移动所有球到每个盒子所需的最小操作数 */

const calcNumOperations = (index, targetIndex) => Math.abs(index - targetIndex);

const minOperations = boxes => {
  const answer = [];
  for (let i = 0; i < boxes.length; i++) {
    let sum = 0;
    for (let j = 0; j < boxes.length; j++) {
      if(j !== i && boxes[j] === "1") sum += calcNumOperations(j, i);
    }
    answer.push(sum);
  }
  return answer;
};
