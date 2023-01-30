import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);   // pulling dataPoint values from dataPoints object
    const totalMax = Math.max(...dataPointValues);    // traversing in array of dataPointValues and finding max value in dataValues
  return (
    <div className ="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key = {dataPoint.label}
          value ={dataPoint.value}
          maxValue ={totalMax}
          label ={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
