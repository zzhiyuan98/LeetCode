/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const n = gas.length;
  let i = 0;
  while (i < n) {
    let sumGas = 0;
    let sumCost = 0;
    let cnt = 0;
    while (cnt < n) {
      const j = (i + cnt) % n;
      sumGas += gas[j];
      sumCost += cost[j];
      if (sumGas < sumCost) {
        break;
      }
      cnt++;
    }
    if (cnt === n) {
      return i;
    }
    i += cnt + 1;
  }
  return -1
};

console.log(canCompleteCircuit([2,3,4], [3,4,3]));