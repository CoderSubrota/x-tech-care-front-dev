import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Data for the line chart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Heart rate",
        data: [60,70,80,90,95,98,110],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  // Options for the line chart
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
        height: "180px",
        marginBottom: "28px",
      }}
    >
      <h2 className="fs-3 my-4"> Diagnosis History </h2>

      <Line data={data} options={options}  className="my-4"/>
    </div>
  );
};

export default LineChart;
