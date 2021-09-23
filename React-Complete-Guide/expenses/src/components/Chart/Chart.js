import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maximumValue = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label} //Months
            value={dataPoint.value} //Amount
            maxValue={maximumValue}
            label={dataPoint.label} // Months
          />
        );
      })}
    </div>
  );
}

export default Chart;
