const removeFromArray = function (arr, remove) {
  const index = arr.indexOf(remove);
  arr.splice(index, 1);
  return arr;
};

// [1, 2, 3, 4] - 3
// Do not edit below this line
module.exports = removeFromArray;
