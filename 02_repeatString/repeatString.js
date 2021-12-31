const repeatString = function (string, numberOfTimesToRepeat) {
  let repeatedString = string;
  //   add in an error if number is negative
  if (numberOfTimesToRepeat < 0) {
    return "ERROR";
    // return empty string if number is 0 or input string is empty.
  } else if (numberOfTimesToRepeat === 0 || string === "") {
    return "";
  }

  for (i = 0; i < numberOfTimesToRepeat - 1; i++) {
    repeatedString += string;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
