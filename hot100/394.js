const decodeString = s => {
  // first in last out
  // stack
  const num_stack = [];
  const letter_stack = [];
  let ans = "";
  const isNumber = char => /^\d$/.test(char);
  const isLetter = char => /^[a-z]$/.test(char);
  for (const char of s) {
    if (isNumber(char)) num_stack.push(char);
    else if (isLetter(char)) letter_stack.push(char);

  }

};

const s = "3[a]2[bc]";
console.log(decodeString(s));
