import React from "react";
import Background_Animation from "./background_animation";

const combined_normalization = ({ array }) => {
  // Function that takes multiple parameters, the first parameter is the array the rest are specific object properties within the array.
  // This function iterates through the array and adds each property together then averages them. Also creating a new property within the object.
  function combinedNormalization(
    array,
    normalizedOne,
    normalizedTwo,
    normalizedThree,
    normalizedFour,
    normalizedFive,
    normalizedSix
  ) {
    // Perform normalization on each object in the array containing the data.
    array.forEach((obj) => {
      obj[`Combined Normalization`] = parseFloat(
        (
          (obj[normalizedOne] +
            obj[normalizedTwo] +
            obj[normalizedThree] +
            obj[normalizedFour] +
            obj[normalizedFive] +
            obj[normalizedSix]) /
          6
        ).toFixed(3)
      );
    });

    return array;
  }

  // Calls the function with the given array and object properties to iterate over.
  combinedNormalization(
    array,
    " Cash Over/Short Normalized",
    " Net Sales Normalized",
    "Average Speed Of Service Normalized",
    "Average Transaction Value Normalized",
    "Beverages Per Transaction Normalized",
    "Discount Percentage of Sales Normalized"
  );

  // Sorts array in ascending order.
  const ascendingArray = array.sort((a, b) =>
    a["Combined Normalization"] > b["Combined Normalization"] ? 1 : -1
  );

  // Creates a copy of the array and reverses it to descending order.
  let descendingArray = array.slice().reverse();

  // Creates another array containing the properties locationName and combinedNormalization. This is the array that contains the combined normalization data.
  const combinedNormalizationArray = descendingArray.map((item) => ({
    locationName: item["Location Name"],
    combinedNormalization: item["Combined Normalization"],
  }));

  // Array containg header titles for displaying the data.
  const headerTitles = ["Location Name", "Combined Normalization"];

  return (
    <div className="space-y-5 mt-5 m-auto h-screen">
      <Background_Animation />
      <h1 className="text-3xl text-center text-[#FA6000] pt-16">
        Combined Normalization
      </h1>
      <table className="m-auto mt-5">
        <thead>
          <tr key={"header"}>
            {headerTitles.map((title, index) => (
              <th key={index} className="p-2">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {combinedNormalizationArray.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((val, index) => (
                <td key={index} className="p-2 text-center ">
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default combined_normalization;
