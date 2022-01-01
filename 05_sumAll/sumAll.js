// summ all
// 1, 4 = 1 + 2 + 3 + 4
// n + 1;
const sumAll = function (firstInt, secondInt) {
  //   check for negative numbers
  if (firstInt < 0 || secondInt < 0) {
    return "ERROR";
  }
  //   check for non-numbers
  if (typeof firstInt !== "number" || typeof secondInt !== "number") {
    return "ERROR";
  }
  //  check which number is greater
  let largerNum = Math.max(firstInt, secondInt);
  let smallerNum = Math.min(firstInt, secondInt);

  let sum = 0;

  for (i = smallerNum; i <= largerNum; i++) {
    sum += i;
  }
  return sum;
};

// console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
