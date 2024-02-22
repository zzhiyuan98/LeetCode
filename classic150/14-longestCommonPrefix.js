/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let ans = "";
  let i = 0;
  const sample = strs[0];
  const maxLen = sample.length;
  while (i < maxLen) {
    if (strs.every(str => str[i] === sample[i])) {
      ans += sample[i++];
    } else {
      break;
    }
  }
  return ans;
};

const strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));
