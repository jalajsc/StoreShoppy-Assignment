import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // Automatically imports necessary chart components

const LineGraphCard = () => {
  const data = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", "", ""], // Example labels
    datasets: [
      {
        label: "Payout Volume",
        data: [0, 236695, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fill: false,
        borderColor: "rgba(66, 135, 245, 1)",
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend for a cleaner look
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false, // Hide x-axis labels
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          display: false, // Hide y-axis labels
        },
      },
    },
  };

  return (
    <div className="w-full bg-[#1a212b] my-4">
      <div className=" text-sm text-[#AAAAAA] pl-4 pt-4">
        Payout volume - last 30 days
      </div>
      <div className="text-white mb-4 text-3xl font-semibold pl-4">
        ₹ 236,695.00
      </div>
      <div className="w-full h-20 ">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineGraphCard;
