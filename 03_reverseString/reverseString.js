const reverseString = function (str) {
  //   console.log(str);
  let reversedString = "";
  const letters = [];
  //   extract each letter
  for (letter of str) {
    letters.push(letter);
  }
  //   console.log(letters);
  for (i = letters.length - 1; i >= 0; i--) {
    // console.log(letters[i]);
    reversedString += letters[i];
  }
  return reversedString;
};

// console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
