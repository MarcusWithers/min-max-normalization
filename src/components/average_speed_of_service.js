import React from "react";

const average_speed_of_service = ({ array }) => {
  // Declaring variables for the minimum and maximum values.
  let minSOS = Infinity;
  let maxSOS = 0;

  // Iterates through the values for the given property within the object and compares them to get the minimum and maximum values.
  for (let i = 0; i < array.length; i++) {
    // Creates variables containing the values for the given object properties.
    const sosCount = parseFloat(array[i][" Speed of Service Total Seconds"]);
    const transactionCount = parseFloat(array[i][" Transaction Count"]);

    // Creates a variable containing the value needed to find the minimum and maximum values.
    let SOS = sosCount / transactionCount;

    if (SOS < minSOS) {
      minSOS = SOS;
    } else if (SOS > maxSOS) {
      maxSOS = SOS;
    }
  }

  // Function that takes multiple parameters, the first parameter is the array the rest are specific object properties within the array.
  // This function iterates through the array and creates a new object property containing the normalized value.
  function minMaxNormalization(array, propertyOne, propertyTwo) {
    // Perform normalization on each object in the array
    array.forEach((obj) => {
      obj[`Average Speed Of Service Normalized`] =
        (obj[propertyOne] / obj[propertyTwo] - minSOS) / (maxSOS - minSOS);
    });

    return array;
  }

  // Calls the function with the given array and object properties to iterate over.
  minMaxNormalization(
    array,
    " Speed of Service Total Seconds",
    " Transaction Count"
  );

  return <div></div>;
};

export default average_speed_of_service;
