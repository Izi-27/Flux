"use client";

import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface DynamicChartProps {
  data: number[];
  labels: string[];
  label: string;
}

export function DynamicChart({ data, labels, label }: DynamicChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        label,
        data,
        fill: true,
        borderColor: "#f97316",
        backgroundColor: "rgba(249, 115, 22, 0.1)",
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#f97316",
        pointBorderColor: "#ffffff",
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#f97316",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
          callback: (value: number) => `$${value.toLocaleString()}`,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#f97316",
        bodyColor: "#ffffff",
        borderColor: "#f97316",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context: any) => `$${context.parsed.y.toLocaleString()}`,
        },
      },
    },
  };

  return (
    <div className="h-[400px] w-full">
      <Line data={chartData} options={options} />
    </div>
  );
}
