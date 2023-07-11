/*
20. 有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
 */

var isValid = function(s) {
  if (s.length < 2) return false;
  const isMatched = (leftChar, rightChar) => {
    if (leftChar === "(" && rightChar === ")") return true;
    if (leftChar === "{" && rightChar === "}") return true;
    if (leftChar === "[" && rightChar === "]") return true;
    return false;
  };
  const leftChars = ["(", "{", "["];
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (leftChars.includes(char)) stack.push(char);
    else {
      const temp = stack.pop();
      if (!isMatched(temp, char)) return false;
    }
  }
  return stack.length === 0;
};
