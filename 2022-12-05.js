/* 1687. 从仓库到码头运输箱子 */

const getPort = box => box[0];

const getWeight = box => box[1];

// f(0) = 0
// f(1) = 2
// f(2) = f(1) + w(1 -> 2)
// w(1 -> 2) = numBoxes < maxBoxes && sumWeight < maxWeight ? (port[1] === port[2] ? 0 : 1) : 2
// f(3) = min(f(2) + w(2 -> 3), f(1) + w(1 -> 3))
// f(4) = min(f(3) + w(3 -> 4), f(2) + w(2 -> 4), f(1) + w(1 -> 4))

const boxDelivering = (boxes, portsCount, maxBoxes, maxWeight) => {
  const f = i => {
    if (i === 0) return 0;
    if (i === 1) return 2;

    for (let i = 1; i <= n; i++) {
      let sumWeight = getWeight(boxes[i - 1]);
      let numBoxes = 1;
      let min = Infinity;
      let w = 2;
      for (let j = i - 1; j > 0; j--) {
        if (sumWeight > maxWeight || numBoxes > maxBoxes) break;
        min = Math.min(min, f(j) + w);
        if (getPort(boxes[j]) !== getPort(boxes[j + 1])) w++;
        sumWeight += getWeight(boxes[j]);
        numBoxes++;
      }
    }
  };
  return f(boxes.length - 1);
};

console.log(boxDelivering([[1,1],[2,1],[1,1]], 2, 3, 3));
