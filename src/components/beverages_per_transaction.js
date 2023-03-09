import React from "react";

const beverages_per_transaction = ({ array }) => {
  // Declaring variables for the minimum and maximum values.
  let minBPT = Infinity;
  let maxBPT = 0;

  // Iterates through the values for the given property within the object and compares them to get the minimum and maximum values.
  for (let i = 0; i < array.length; i++) {
    // Creates variables containing the values for the given object properties.
    const beverageCount = parseFloat(array[i][" Beverage Count"]);
    const transactionCount = parseFloat(array[i][" Transaction Count"]);

    // Creates a variable containing the value needed to find the minimum and maximum values.
    let BPT = beverageCount / transactionCount;

    if (BPT < minBPT) {
      minBPT = BPT;
    } else if (BPT > maxBPT) {
      maxBPT = BPT;
    }
  }

  // Function that takes multiple parameters, the first parameter is the array the rest are specific object properties within the array.
  // This function iterates through the array and creates a new object property containing the normalized value.
  function minMaxNormalization(array, propertyOne, propertyTwo) {
    // Perform normalization on each object in the array
    array.forEach((obj) => {
      obj[`Beverages Per Transaction Normalized`] =
        (obj[propertyOne] / obj[propertyTwo] - minBPT) / (maxBPT - minBPT);
    });

    return array;
  }

  // Calls the function with the given array and object properties to iterate over.
  minMaxNormalization(array, " Beverage Count", " Transaction Count");

  return <div></div>;
};

export default beverages_per_transaction;
