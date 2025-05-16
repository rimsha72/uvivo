import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Filler } from 'chart.js'; // Import Filler

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Filler); // Register Filler plugin

const Chart6 = () => {
  const canvasRef = React.useRef(null);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Curved Line Chart',
        data: [0, 40, 30, 80, 75, 95, 95], 
        borderColor: '#24BC73',
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return;
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'white');  
          gradient.addColorStop(1, '#24BC73'); 
          return gradient;
        },
        fill: true, 
        tension: 0.4, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
    },
    scales: {
      x: {
        display: false, 
      },
      y: {
        display: false, 
      },
    },
    elements: {
      line: {
        borderWidth: 0.5, 
      },
      point: {
        radius: (context) => {
          
          const index = context.dataIndex;
          return index === 0 || index === context.dataset.data.length - 1 ? 0.5 : 0; 
        },
        backgroundColor: '#24BC73', 
      },
    },
  };

  return (
    <div style={{ width: '112px', height: '86px' }}>
      <Line data={data} options={options} ref={canvasRef} />
    </div>
  );
};

export default Chart6;
