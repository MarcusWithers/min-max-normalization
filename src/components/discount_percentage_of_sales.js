import React from "react";

const discount_percentage_of_sales = ({ array }) => {
  // Declaring variables for the minimum and maximum values.
  let minDPOS = Infinity;
  let maxDPOS = 0;

  // Iterates through the values for the given property within the object and compares them to get the minimum and maximum values.
  for (let i = 0; i < array.length; i++) {
    // Creates variables containing the values for the given object properties.
    const totalDiscount = parseFloat(array[i][" Discount Total Amount\r"]);
    const netSales = parseFloat(array[i][" Net Sales"]);

    // Creates a variable containing the value needed to find the minimum and maximum values.
    let discountPercentageOfSales = totalDiscount / netSales;

    if (discountPercentageOfSales < minDPOS) {
      minDPOS = discountPercentageOfSales;
    } else if (discountPercentageOfSales > maxDPOS) {
      maxDPOS = discountPercentageOfSales;
    }
  }

  // Function that takes multiple parameters, the first parameter is the array the rest are specific object properties within the array.
  // This function iterates through the array and creates a new object property containing the normalized value.
  function minMaxNormalization(araray, propertyOne, propertyTwo) {
    // Perform normalization on each object in the array.
    araray.forEach((obj) => {
      obj[`Discount Percentage of Sales Normalized`] =
        (obj[propertyOne] / obj[propertyTwo] - minDPOS) / (maxDPOS - minDPOS);
    });

    // Return the normalized araray
    return araray;
  }

  // Calls the function with the given array and object properties to iterate over.
  minMaxNormalization(array, " Discount Total Amount\r", " Net Sales");

  return <div></div>;
};

export default discount_percentage_of_sales;
