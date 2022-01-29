const findTheOldest = function (people) {
  const oldest = people.sort((a, b) => {
    if (a.yearOfDeath === undefined) {
      aDeath = new Date().getFullYear();
    } else {
      aDeath = a.yearOfDeath;
    }

    if (b.yearOfDeath === undefined) {
      bDeath = new Date().getFullYear();
    } else {
      bDeath = b.yearOfDeath;
    }

    // console.log({ aDeath }, { bDeath });

    return aDeath - a.yearOfBirth > bDeath - b.yearOfBirth ? -1 : 1;
  });
  //   console.log(oldest);
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
