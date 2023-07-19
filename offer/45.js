var minNumber = function(nums) {
  const compareFun = (a, b) => {
    const s1 = a.toString() + b.toString();
    const s2 = b.toString() + a.toString();
    return parseInt(s1) - parseInt(s2);
  };
  return nums.sort(compareFun).join("");
};
