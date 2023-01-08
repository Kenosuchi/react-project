import React from 'react';
import './ChartBar.css';

const ChartBar = (pros) => {
  let barFillHeight = '0%';

  if (pros.maxValue > 0) {
    barFillHeight = Math.round((pros.value / pros.maxValue) * 100) + '%';
  }
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{pros.label}</div>
    </div>
  );
};

export default ChartBar;
