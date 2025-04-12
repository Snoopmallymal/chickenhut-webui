import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

let myChartInstance = null;

export function chartpush(id, newOption) {
  if (myChartInstance) {
    myChartInstance.setOption(newOption, true); // true for not merging with old data
  } else {
    console.warn('Chart not initialized yet');
  }
}

const EChartWrapper = ({ chartId = 'main' }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      myChartInstance = echarts.init(chartRef.current);

      // Initial chart config
      const initialOption = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line'
          }
        ]
      };

      myChartInstance.setOption(initialOption);
    }

    return () => {
      if (myChartInstance) {
        myChartInstance.dispose();
        myChartInstance = null;
      }
    };
  }, []);

  return <div id={chartId} ref={chartRef} style={{ width: '100%', height: 400 }} />;
};

export default EChartWrapper;