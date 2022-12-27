const sumAll = function (num1, num2) {
  let current = 0;
  let result = 0;
  if (
    num1 < 0 ||
    num2 < 0 ||
    !(typeof num1 === "number") ||
    !(typeof num2 === "number")
  ) {
    return "ERROR";
  } else {
    if (num1 < num2) {
      for (let i = 1; i < num2 + 1; i++) {
        current = i;
        result += current;
      }
    } else {
      for (let i = 1; i < num1 + 1; i++) {
        current = i;
        result += current;
      }
    }
  }
  return result;
};
// Do not edit below this line
module.exports = sumAll;
