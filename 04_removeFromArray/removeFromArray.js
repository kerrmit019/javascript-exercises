const removeFromArray = function (inputArray, itemToBeRemoved) {
  //    get index of item to be removed
  let removePosition = inputArray.indexOf(itemToBeRemoved);
  //   console.log(removePosition);
  let firstPartNewArray = inputArray.slice(0, removePosition);
  let secondPartNewArray = inputArray.slice(removePosition + 1);
  let newArray = firstPartNewArray.concat(secondPartNewArray);
  //   console.log(firstPartNewArray);
  //   console.log(secondPartNewArray);
  return newArray;
};

// console.log(removeFromArray(["Hello", "There", "When", "is"], "There"));
// console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
