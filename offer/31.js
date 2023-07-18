const validateStackSequences = function(pushed, popped) {
  const stack = [];
  let i = 0;
  for (const item of pushed) {
    stack.push(item);
    while (stack.length && stack[stack.length - 1] === popped[i]) {
      stack.pop();
      i++;
    }
  }
  return stack.length === 0;
};

