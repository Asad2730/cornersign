"use client";
import "chart.js/auto";
import dynamic from "next/dynamic";
import { useState } from "react";
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

export const CustomChart = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "",
        data: [0, 100, 300, 200, 500, 300, 400, 100, 200, 300, 400, 600],
        borderColor: "#5E99A0",
        backgroundColor: "rgba(45, 156, 219, 0.04)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#e5e7eb",
        },
        beginAtZero: true,
        max: 600,
      },
    },
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-[#FFFFFF] shadow ">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold text-[#252F40]">
              Sales Overview
            </h3>
            <p className="text-sm text-[#82D616]">
              ↑ <span className="text-[#67748E]">4% more in</span>
              <span className="text-[#252F40]"> 2023 </span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={handleToggle}
              className={`${
                !toggle
                  ? "text-[#4DB1BC] border border-[#5E99A0] rounded px-3 py-1"
                  : "text-[#AFAFAF] rounded px-3 py-1"
              }`}
            >
              Month
            </button>
            <button
            onClick={handleToggle}
              className={`${
                toggle
                  ? "text-[#4DB1BC] border border-[#5E99A0] rounded px-3 py-1"
                  : "text-[#AFAFAF] rounded px-3 py-1"
              }`}
            >
              Year
            </button>
          </div>
        </div>
        <div className="relative lg:h-[220px]">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};
