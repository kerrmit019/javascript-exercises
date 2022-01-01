const removeFromArray = function (inputArray, itemToBeRemoved) {
  // set up for multiple arguments
  let args = [...arguments];

  //    get index of item to be removed for each argument, from the itemToBeRemoved
  //   starting from argument 1
  for (i = 1; i < args.length; i++) {
    // console.log(args[i]);
    let removePosition = inputArray.indexOf(args[i]);
    // check if indexOf returns value or not;
    if (removePosition !== -1) {
      let firstPartNewArray = inputArray.slice(0, removePosition);
      let secondPartNewArray = inputArray.slice(removePosition + 1);
      let newArray = firstPartNewArray.concat(secondPartNewArray);
      inputArray = newArray;
    }
    // update inputArray to be newArray so it can feed it in for the next cycle
    // and remove for more than one argument
    // console.log(inputArray);
  }

  return inputArray;
};

// console.log(removeFromArray(["Hello", "There", "When", "is"], "There"));
// console.log(removeFromArray([1, 2, 3, 4], 1, 3));
// console.log(removeFromArray([1, 2, 3, 4], 1, "taco"));

// Do not edit below this line
module.exports = removeFromArray;
