import React from "react";

const average_transaction_value = ({ array }) => {
  // Declaring variables for the minimum and maximum values.
  let minATV = Infinity;
  let maxATV = 0;

  // Iterates through the values for the given property within the object and compares them to get the minimum and maximum values.
  for (let i = 0; i < array.length; i++) {
    // Creates variables containing the values for the given object properties.
    const netSales = parseFloat(array[i][" Net Sales"]);
    const transactionCount = parseFloat(array[i][" Transaction Count"]);

    // Creates a variable containing the value needed to find the minimum and maximum values.
    let ATV = netSales / transactionCount;

    if (ATV < minATV) {
      minATV = ATV;
    } else if (ATV > maxATV) {
      maxATV = ATV;
    }
  }

  // Function that takes multiple parameters, the first parameter is the array the rest are specific object properties within the array.
  // This function iterates through the array and creates a new object property containing the normalized value.
  function minMaxNormalization(array, propertyOne, propertyTwo) {
    // Perform normalization on each object in the array
    array.forEach((obj) => {
      obj[`Average Transaction Value Normalized`] =
        (obj[propertyOne] / obj[propertyTwo] - minATV) / (maxATV - minATV);
    });

    return array;
  }

  // Calls the function with the given array and object properties to iterate over.
  minMaxNormalization(array, " Net Sales", " Transaction Count");

  return <div></div>;
};

export default average_transaction_value;
