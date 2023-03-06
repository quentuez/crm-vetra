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

export default function SmallLineChart() {
  const data = {
    labels: [
      "01 May",
      "02 May",
      "03 May",
      "04 May",
      "05 May",
      "06 May",
      "07 May",
    ],
    datasets: [
      {
        label: "Sales",
        data: [25, 66, 41, 89, 63, 30, 50],
        tension: 0.4,
        borderColor: "rgb(255,127,80)",
        backgroundColor: "rgb(255,127,80, 1)",
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
      <Line options={options} data={data} height={35} width={100} />
    </div>
  );
}
