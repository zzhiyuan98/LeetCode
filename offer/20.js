const isPure = str => {
  for (const char of str) {
    if (char < "0" || char > "9") {
      return false;
    }
  }
  return true;
};

const isInteger = str => {
  if (!str) {
    return false;
  }
  let start = 0;
  if (["+", "-"].includes(str[0])) {
    start++;
  }
  return isPure(str.substring(start));
};

const isFloat = str => {k
  if (!str) {
    return false;
  }
  let start = 0;
  if (["+", "-"].includes(str[0])) {
    start++;
  }
  const tokens = str.substring(start).split(".");
  if (tokens.length !== 2) {
    return false;
  }
  if (tokens[0] === "" && tokens[1] === "") {
    return false;
  }
  return !tokens.some(v => v !== "" && !isPure(v));
};

var isNumber = function(s) {
  const str = s.trim();
  for (const char of str) {
    if (!/[eE0-9.+-]/.test(char)) {
      return false;
    }
  }
  const tokens = str.split(/[eE]/);
  if (tokens.length > 2) {
    return false;
  }
  if (tokens.length === 1) {
    return isInteger(tokens[0]) || isFloat(tokens[0]);
  }
  else {
    return (isInteger(tokens[0]) || isFloat(tokens[0])) && isInteger(tokens[1]);
  }
};

const s = "53K";
console.log(isNumber(s));
