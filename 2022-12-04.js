/* 1774. 最接近目标价格的甜点成本 */

const getSet = toppingCosts => {
    const set = new Set();
    // 枚举到第 index 个配料，当前用的配料价格为 sum
    const f = (index, sum) => {
        if (index === toppingCosts.length) return set.add(sum);
        f(index + 1, sum);
        f(index + 1, sum + toppingCosts[index]);
        f(index + 1, sum + toppingCosts[index] * 2);
    };
    f(0, 0, toppingCosts, set);
    return set;
};

const getToppingCost = (baseCost, target, toppingCosts) => {
    // 基料价格大于等于目标价格，不再添加配料
    if (baseCost >= target) return 0;
    // 基料价格小于目标价格，判断是否可以通过添加配料来接近目标价格
    const diff = target - baseCost;
    const set = getSet(toppingCosts);
    let minDiff = Infinity;
    let result = undefined;
    for (const cost of set) {
        const temp = Math.abs(diff - cost);
        if (temp < minDiff) {
            minDiff = temp;
            result = cost;
        }
        if (temp === minDiff && cost < result) result = cost;
    }
    return result;
};

const closestCost = (baseCosts, toppingCosts, target) => {
    let minDiff = Infinity;
    let result = undefined;
    for (const baseCost of baseCosts) {
        const toppingCost = getToppingCost(baseCost, target, toppingCosts);
        const sum = baseCost + toppingCost;
        const diff = Math.abs(sum - target);
        if (diff < minDiff) {
            result = sum;
            minDiff = diff;
        }
        // 有多种方案，选择成本相对较低的一种
        if (diff === minDiff && sum < result) result = sum;
    }
    return result;
};
