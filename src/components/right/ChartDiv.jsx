import React from "react";
import ChartElem from "./ChartElem";

const ChartDiv = () => {
  return (
    <div className="bg-white rounded-[40px] p-4 mt-4">
      <div className="flex justify-between items-center">
        <div className="l">
          <h4 className="font-bold text-md">Upcoming hours</h4>
        </div>
        <div className="r flex justify-between items-center space-x-2 text-sm">
          <div className="bg-grey rounded-lg opacity-80 pl-1 text-sm">
            Rain Precipitation
            <span className="material-icons">keyboard_arrow_down</span>
          </div>
          <div className="bg-grey rounded-lg pl-1 text-sm">
            Next Days
            <span className="material-icons">keyboard_arrow_right</span>
          </div>
        </div>
      </div>
      <ChartElem />
    </div>
  );
};

export default ChartDiv;
