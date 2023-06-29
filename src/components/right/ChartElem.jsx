import React, { useState } from "react";
import Chart from "react-apexcharts";
//chart data in static (also mentioned in assignment)

const ChartElem = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Now",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
        ],
      },
    },
    series: [
      {
        name: "Chances  Percentage",
        data: ["23%", "29%", "58%", "75%", "33%", "20%", "73%", "49%"],
      },
    ],
  });

  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        height={150}
      />
    </div>
  );
};

export default ChartElem;
