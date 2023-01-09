const fibonacci = function (a) {
  a = a * 1;
  if (a > 0) {
    let numbers = [0, 1];
    function fibonacciNumbers() {
      for (let i = 1; i < 25; i++) {
        numbers.push(numbers[i] + numbers[i - 1]);
      }
    }
    fibonacciNumbers();
    return numbers[a];
  } else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
