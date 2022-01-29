const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (x) {
  return x.reduce((total, num) => total + num, 0);
};

const multiply = function (x) {
  return x.reduce((total, num) => total * num, 1);
};

const power = function (x, y) {
  return Math.pow(x, y);
};

const factorial = function (x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
};

// // Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
