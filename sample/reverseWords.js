/*
单词倒序
 */

const reverseWords = str => {
  let ans = "";
  let stack = [];
  for (const char of str) {
    if ([" ",",",".","?"].includes(char)) {
      while (stack.length) {
        ans += stack.pop();
      }
      ans += char;
    }
    else {
      stack.push(char);
    }
  }
  return ans;
};

export default reverseWords;
