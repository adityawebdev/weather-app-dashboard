import React from "react";
import Header from "./right/Header";
import ChartDiv from "./right/ChartDiv";
import InfoGrid from "./right/InfoGrid";

//Right div is further divided into 3 different parts - header , div for chart and grid which contains the info about humidity, temp,wind ,etc

const Right = () => {
  return (
    <div className="bg-light-grey h-4/5 w-7/12  rounded-[80px] -ml-16 p-12">
      <Header />
      <ChartDiv />
      <h1 className="text-lg font-bold mt-2">
        More details of today's weather
      </h1>
      <InfoGrid />
    </div>
  );
};

export default Right;
