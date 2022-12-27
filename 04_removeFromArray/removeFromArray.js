const removeFromArray = function (arr, num1, num2) {
  const num1Index = arr.indexOf(num1);
  arr.splice(num1Index, 1);
  if (num2 > 1) {
    const num2Index = arr.indexOf(num2);
    arr.splice(num2Index, 1);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
