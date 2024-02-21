/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
  const map = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"],
  [5, "V"], [4, "IV"], [1, "I"]];
  let ans = "";
  for (const [key, value] of map) {
    const quotient = Math.floor(num / key);
    if (quotient > 0) {
      ans += value.repeat(quotient);
      num %= key;
    }
  }
  return ans;
};

console.log(intToRoman(3));
