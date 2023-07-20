var reverseWords = function(s) {
  const words = s.trim().split(" ").filter(word => word !== "");
  return words.reverse().join(" ");
};
