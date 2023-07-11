/*
151. 反转字符串中的单词

给你一个字符串 s ，请你反转字符串中单词的顺序。

单词是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的单词分隔开。

返回单词顺序颠倒且单词之间用单个空格连接的结果字符串。

注意：输入字符串 s 中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。
 */

const reverseWords = s => {
  const words = s.split(" ").filter(s => s !== "");
  return words.reverse().join(" ");
};

const s = "  hello world   ";
console.log(reverseWords(s));
