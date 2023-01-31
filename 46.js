var translateNum = function(num) {
  const str = num.toString();
  const hasMultiple = (idx1, idx2) => {
    const num1 = parseInt(str[idx1]);
    const num2 = parseInt(str[idx2]);
    if (num1 === 1) return true;
    if (num1 === 2 && num2 <= 5) return true;
    return false;
  };
  let first = 1;
  if (str.length === 1) return first;
  let second = hasMultiple(0, 1) ? 2 : 1;
  for (let i = 2; i < str.length; i++) {
    const temp = second;
    second = hasMultiple(i - 1, i) ? first + second : second;
    first = temp;
  }
  return second;
};

const num = 12124;
console.log(translateNum(num));
