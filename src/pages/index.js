import Head from "next/head";
import React, { useEffect, useState } from "react";
import Average_Speed_of_Service from "../components/average_speed_of_service";
import Average_Transaction_Value from "../components/average_transaction_value";
import Beverages_Per_Transaction from "../components/beverages_per_transaction";
import Cash_Over_Short from "../components/cash_over_short";
import Combined_Normalization from "../components/combined_normalization";
import Discount_Percentage_of_Sales from "../components/discount_percentage_of_sales";
import Header from "../components/header";
import Hero_Banner from "../components/hero_banner";
import Net_Sales from "../components/net_sales";

export default function Home() {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  // When the files updated or changed ('on submit') the state for file will be set to the given file.
  const handleOnChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Re-renders the page in order to update combined normalization calculator.
  useEffect(() => {
    setArray((prevArray) => [...prevArray]);
  }, [array]);

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    // Gets rid of empty objects in the array, and sets the state of the array to the updated array.
    setArray(
      array.filter(
        (obj) =>
          !obj["Location Name"].includes("\r") && !obj["Location Name"] == ""
      )
    );
  };

  // When the form is submitted the data within the file will be read
  const handleOnSubmit = (event) => {
    event.preventDefault();
    let fileReader = new FileReader();
    if (file) {
      fileReader.onload = function (event) {
        const csvOutput = event.target.result;
        csvFileToArray(csvOutput);
      };

      fileReader.readAsText(file);
    }
  };

  // Creates header titles for displaying data.
  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <div className="bg-[rgb(36,36,36)] text-white z-0 ">
      <Head>
        <title>Min-Max Normalization</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section id="home" className="text-white   text-center ">
        <Hero_Banner />
        <h1 className="pt-16 text-3xl mb-3 text-[#FA6000]">
          Choose a CSV File
        </h1>
        <form>
          <input
            type={"file"}
            id={"csvFileInput"}
            accept={".csv"}
            onChange={handleOnChange}
          />
          <button
            className="hover:text-[#FA6000]"
            onClick={(event) => {
              handleOnSubmit(event);
            }}
          >
            Import CSV file
          </button>
        </form>
      </section>
      <section className=" h-screen text-center text-white " id="normalization">
        <Combined_Normalization array={array} />
      </section>
      <section
        className=" h-100 text-white overflow-x-scroll max-w-7xl m-auto"
        id="overview"
      >
        <table className="mt-32 md:mt-20 p-5 bg-[#ca4d00] rounded-md ">
          <thead className="">
            <tr key={"header"}>
              {headerKeys.map((key, index) => (
                <th key={index} className="p-3">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {array.map((item) => (
              <tr key={item.id}>
                {Object.values(item).map((val, index) => (
                  <td key={index} className="p-3 text-center">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <Net_Sales array={array} />
        <Average_Transaction_Value array={array} />
        <Beverages_Per_Transaction array={array} />
        <Cash_Over_Short array={array} />
        <Average_Speed_of_Service array={array} />
        <Discount_Percentage_of_Sales array={array} />
      </section>
    </div>
  );
}
