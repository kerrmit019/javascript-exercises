// Fn = Fn-1 + Fn-2 for n >1
const fibonacci = function (x) {
  //  set up base case
  // in our scenario fibonacci sequence starts at 1
  // so first and second numbers are 1;
  let n1 = 1;
  let n2 = 1;
  let n = 0;
  let temp = 0;
  // x = final n
  //   reject negative numbers
  if (x < 0) {
    return "OOPS";
  }
  //   convert x  to int if required
  x = +x;
  //   since my solutions skips first 2 entries 1, 1
  if (x === 1 || x === 2) {
    return 1;
  }
  if (x === 0) {
    return 0;
  }

  // loop until we get to x
  for (let i = 0; i < x - 1; i++) {
    // we need to create n
    n = n1 + n2;

    // hold n1 aside so we can use later
    temp = n1;
    // move n1 and n2 to new spaces, along one.

    // console.log({ n }, { n1 }, { n2 });

    n1 = n;
    n2 = temp;

    // console.log({ n }, { n1 }, { n2 });
  }
  //   since my solutions skips first 2 entries 1, 1
  //   as this is the correct point in the sequence.
  return n2;
};

// console.log(fibonacci("4"));

// Do not edit below this line
module.exports = fibonacci;
