var isValid = function (s) {
  const arr = [];

  const characters = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (const symb of s) {
    if (!characters[symb]) {
      arr.push(symb);
    } else if (arr.pop() !== characters[symb]) {
      return false;
    }
  }
  return arr.length === 0;
};
console.log(isValid("[]"));
console.log(isValid("{[]}()"));
console.log(isValid("{[]}({)}"));
console.log(isValid("["));
