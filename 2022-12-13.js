/* 1832. 判断句子是否为全字母句 */

const checkIfPangram = sentence => {
  if (sentence.length < 26) return false;
  const set = new Set();
  for (const char of sentence) {
    set.add(char);
  }
  return set.size === 26;
};
