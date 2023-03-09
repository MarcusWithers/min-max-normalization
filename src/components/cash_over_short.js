import React from "react";

const cash_over_short = ({ array }) => {
  // Declaring variables for the minimum and maximum values.
  let minCashShort = Infinity;
  let maxCashShort = 0;

  // Iterates through the values for the given property within the object and compares them to get the minimum and maximum values.
  for (let i = 0; i < array.length; i++) {
    const cashOverShort = parseFloat(array[i][" Cash Over/Short"]);
    if (cashOverShort < minCashShort) {
      minCashShort = cashOverShort;
    } else if (cashOverShort > maxCashShort) {
      maxCashShort = cashOverShort;
    }
  }
  // Function that takes multiple parameters, the first parameter is the array the rest are specific object properties within the array.
  // This function iterates through the array and creates a new object property containing the normalized value.
  function minMaxNormalization(array, property) {
    // Perform normalization calculation on each object in the array
    array.forEach((obj) => {
      obj[`${property} Normalized`] =
        (obj[property] - minCashShort) / (maxCashShort - minCashShort);
    });

    return array;
  }

  // Calls the function with the given array and object properties to iterate over.
  minMaxNormalization(array, " Cash Over/Short");

  return <div></div>;
};

export default cash_over_short;
