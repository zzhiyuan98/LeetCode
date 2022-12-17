/* 1764. 通过连接另一个数组的子数组得到一个数组 */

const isSameArray = (a, b) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const canChoose = (groups, nums) => {
  const n = groups.length;
  let index = 0;
  for (let i = 0; i < n; i++) {
    const target = groups[i];
    const targetLength = groups[i].length;
    let flag = false;
    for (let j = index; j < nums.length; j++) {
      if (isSameArray(nums.slice(j, j + targetLength), target)) {
        index = j + targetLength;
        flag = true;
        break;
      }
    }
    if (!flag) return false;
  }
  return true;
};
