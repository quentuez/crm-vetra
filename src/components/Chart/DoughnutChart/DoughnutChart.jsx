import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const data = {
    labels: ["Social Media", "Google", "Email"],
    datasets: [
      {
        data: [48, 30, 22],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
        pointStyle: "circle",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Doughnut data={data} height={232} options={options} />
    </div>
  );
}
