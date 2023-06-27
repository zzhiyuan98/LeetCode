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
