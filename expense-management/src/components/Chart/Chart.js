import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';
const Chart = (pros) => {
  const dataPointsValue = pros.dataPoints.map((data) => data.value);
  const maxValue = Math.max(...dataPointsValue);

  return (
    <div className='chart'>
      {pros.dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={maxValue}
          label={data.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
