const removeFromArray = function (arr, num1, num2) {
  if (num1 > arr.length + 1 && num2 > arr.length + 1) {
    console.log("1");
    return arr;
  } else if (num1 > arr.length + 1) {
    if (num2 < arr.length + 1) {
      const num2Index = arr.indexOf(num2);
      arr.splice(num2Index, 1);
      console.log("2");
    }
    return arr;
  } else if (num2 > arr.length + 1) {
    const num1Index = arr.indexOf(num1);
    arr.splice(num1Index, 1);
    console.log("3");
    return arr;
  } else if (num1 < arr.length + 1 || num2 < arr.length + 1) {
    const num1Index = arr.indexOf(num1);
    arr.splice(num1Index, 1);
    if (num2 > 0) {
      const num2Index = arr.indexOf(num2);
      arr.splice(num2Index, 1);
    }
    console.log("4");
    return arr;
  }
};

console.log(removeFromArray([1, 2, 3], "1", 3));
