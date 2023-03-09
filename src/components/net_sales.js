import React from "react";

const net_sales = ({ array }) => {
  // Declaring variables for the minimum and maximum values.
  let minSales = Infinity;
  let maxSales = 0;

  // Iterates through the values for the given property within the object and compares them to get the minimum and maximum values.
  for (let i = 0; i < array.length; i++) {
    const netSales = parseFloat(array[i][" Net Sales"]);
    if (netSales < minSales) {
      minSales = netSales;
    } else if (netSales > maxSales) {
      maxSales = netSales;
    }
  }

  // Function that takes multiple parameters, the first parameter is the array the rest are specific object properties within the array.
  // This function iterates through the array and creates a new object property containing the normalized value.
  function minMaxNormalization(array, property) {
    // Perform normalization on each object in the array
    array.forEach((obj) => {
      obj[`${property} Normalized`] =
        (obj[property] - minSales) / (maxSales - minSales);
    });

    return array;
  }

  // Calls the function with the given array and object properties to iterate over.
  minMaxNormalization(array, " Net Sales");

  return <div></div>;
};

export default net_sales;
