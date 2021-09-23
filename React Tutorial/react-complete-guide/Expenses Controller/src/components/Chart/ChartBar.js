import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  let barCharFill = "0%";

  if (props.maxValue > 0) {
    barCharFill = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barCharFill }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
