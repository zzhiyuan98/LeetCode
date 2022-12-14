/* 1687. 从仓库到码头运输箱子 */

const getPort = box => box[0];

const getWeight = box => box[1];

// 定义 f(i) 为前 i 个箱子被处理完且车在仓库的最少行程次数，则 f(0) = 0，求 f(n) (n = boxes.length)
// f(i) 仅与前 i 个箱子有关，且 f(i) = f(j) + 车从仓库出发运一圈货回到仓库所需次数，需满足 0 <= j < i
// 枚举 j，计算把 j + 1 到 i 个箱子运完所需次数，取最小值
// 定义 w(j + 1, i) 为把 j + 1 到 i 个箱子运完所需次数，则 f(i) = min(f(j) + w(j + 1, i))

// f(0) = 0
// f(1) = f(0) + w(0 -> 1)
// f(2) = min(f(1) + w(1 -> 2), f(0) + w(0 -> 2)）
// w(1 -> 2): numBoxes <= maxBoxes && sumWeight <= maxWeight ? (port 1 === port 2 ? 0 : 1) : 2
// f(3) = min(f(2) + w(2 -> 3), f(1) + w(1 -> 3), f(0) + w(0 -> 3));

const boxDelivering = (boxes, portsCount, maxBoxes, maxWeight) => {
  const f = [0];
  for (let i = 1; i <= boxes.length; i++) {
    let min = Infinity;
    let w = 2;
    let sumWeight = getWeight(boxes[i - 1]);
    let countBoxes = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (sumWeight > maxWeight || countBoxes > maxBoxes) break;
      min = Math.min(min, f[j] + w);
      if (j >= 1 && getPort(boxes[j]) !== getPort(boxes[j - 1])) w++;
      if (j >= 1) sumWeight += getWeight(boxes[j - 1]);
      countBoxes++;
    }
    f[i] = min;
  }
  return f[boxes.length];
};

console.log(boxDelivering([[1,1],[2,1],[1,1]], 2, 3, 3));
