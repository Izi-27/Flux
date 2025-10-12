import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
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
  Filler,
  Legend
);

export function Chart() {
  const { theme } = useTheme();
  const textColor = theme === "dark" ? "#9ca3af" : "#4b5563";
  const gradientColor = theme === "dark" ? "#ff6b6b" : "#f97316";

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        fill: true,
        label: "Portfolio Value",
        data: [400, 300, 600, 800, 500, 900],
        borderColor: gradientColor,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, `${gradientColor}50`);
          gradient.addColorStop(1, `${gradientColor}00`);
          return gradient;
        },
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: theme === "dark" ? "#1f2937" : "#000000cc ",
        titleColor: theme === "dark" ? "#ffffff" : "#f97316",
        bodyColor: theme === "dark" ? "#ffffff" : "#ffffff",
        borderColor: "#f97316",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
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
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };

  return <Line options={options} data={data} />;
}