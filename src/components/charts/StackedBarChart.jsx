import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const StackedBarChart = ({ labels, datasets }) => {
  if (!labels || labels.length === 0 || !datasets || datasets.length === 0) {
    return (
      <div className="text-sm h-full text-primary-black flex items-center justify-center">
        No records to display
      </div>
    );
  }

  const data = {
    labels,
    datasets,
  };
  const options = {
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        borderWidth: 2,
        ticks: {
          fontSize: 20, // Adjust this value to change the x-axis label font size
        },
      },
      y: {
        stacked: true,
        display: false,
        gridLines: {
          display: false,
        },
        ticks: {
          fontSize: 20, // Adjust this value to change the y-axis label font size
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    defaultFontSize: "20px",
  };

  return (
    <div className="h-full w-full">
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default StackedBarChart;
