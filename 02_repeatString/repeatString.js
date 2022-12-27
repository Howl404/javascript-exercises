const repeatString = function (message, repeat) {
  if (repeat < 0) {
    return "ERROR";
  }
  result = "";
  for (let i = 0; i < repeat; i++) {
    result += message;
  }
  return result;
};
//
// Do not edit below this line
module.exports = repeatString;
