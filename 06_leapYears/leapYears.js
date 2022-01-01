// Leap years are years divisible by four (like 1984 and 2004).
// However, years divisible by 100 are not leap years (such as 1800 and 1900)
// unless they are divisible by 400 (like 1600 and 2000)

const leapYears = function (year) {
  //   console.log(year, year % 400);
  if (!(year % 100) && !(year % 400)) {
    return true;
  } else if (year % 100 && !(year % 4)) {
    return true;
  } else {
    return false;
  }
};

// console.log(leapYears(1984));
// console.log(leapYears(2000));
// console.log(leapYears(2004));
// console.log(leapYears(1900));
// console.log(leapYears(1600));

// Do not edit below this line
module.exports = leapYears;
