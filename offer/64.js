const sumNums = n => {
  n && (n += sumNums(n - 1));
  return n;
};
