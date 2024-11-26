// PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components of Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Data for the pie chart
  const data = {
    labels: ['Heart Rate', 'Blood Pressure', 'Temperature'],
    datasets: [
      {
        data: [35, 45, 20], // Example percentages or values
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Red
          'rgba(54, 162, 235, 0.6)', // Blue
          'rgba(75, 192, 192, 0.6)', // Green
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div style={{   width: "100%", height:"205px", margin: 'auto', marginTop:"10px" }}>

      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
