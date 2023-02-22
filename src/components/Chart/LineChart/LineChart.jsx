import React from "react";

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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  const data = {
    labels: [
      "01 May",
      "02 May",
      "03 May",
      "04 May",
      "05 May",
      "06 May",
      "07 May",
      "08 May",
      "09 May",
      "10 May",
      "11 May",
      "12 May",
    ],
    datasets: [
      {
        label: "Orders",
        data: [78, 75, 73, 78, 75, 73, 77, 74, 75, 77, 71, 75],
        tension: 0.4,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Sales",
        data: [65, 60, 62, 69, 71, 65, 68, 67, 60, 61, 59, 64],
        tension: 0.4,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 55,
        max: 80,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
        pointStyle: "circle",
      },
    },
  };
  return (
    <div>
      <Line options={options} data={data} height={350} />
    </div>
  );
}
