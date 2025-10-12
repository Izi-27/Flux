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
import { useTheme } from "../providers/theme-provider";

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

  const { theme } = useTheme();
  const textColor = theme === "dark" ? "#9ca3af" : "#4b5563";

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
          color: "#ffffff19",
        },
        ticks: {
          color: textColor,
        },
      },
      y: {
        grid: {
          color: theme === "dark" ? "#374151" : "#e5e7eb",
        },
        ticks: {
          color: textColor,
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
        backgroundColor: "#000000cc",
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
