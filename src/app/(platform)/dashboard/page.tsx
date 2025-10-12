"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useTheme } from "@/components/providers/theme-provider";
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
import {
  Activity,
  TrendingUp,
  DollarSign,
  Users,
  ArrowUpRight,
  Zap,
} from "lucide-react";

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

function Chart() {
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
        backgroundColor: (context) => {
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
        backgroundColor: theme === "dark" ? "#1f2937" : "#ffffff",
        titleColor: theme === "dark" ? "#ffffff" : "#000000",
        bodyColor: theme === "dark" ? "#ffffff" : "#000000",
        borderColor: theme === "dark" ? "#374151" : "#e5e7eb",
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

const statsCards = [
  {
    title: "Total Value Locked",
    value: "$1.2M",
    change: "+12.5%",
    icon: DollarSign,
    gradient: "from-orange-500 to-red-500",
    borderGradient: "border-orange-500",
    bgGradient: "from-orange-500/10 to-red-500/10 ",
  },
  {
    title: "Active Agents",
    value: "245",
    change: "+5.2%",
    icon: Users,
    gradient: "from-blue-500 to-purple-500",
    borderGradient: "border-blue-500",
    bgGradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    title: "Total Trades",
    value: "1.5K",
    change: "+8.1%",
    icon: Activity,
    gradient: "from-green-500 to-emerald-500",
    borderGradient: "border-green-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    title: "Profit/Loss",
    value: "+$50.2K",
    change: "+15.3%",
    icon: TrendingUp,
    gradient: "from-yellow-500 to-orange-500",
    borderGradient: "border-yellow-500",
    bgGradient: "from-yellow-500/10 to-orange-500/10",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-transparent transition-colors duration-300">
      <div className="space-y-8 p-8 max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground text-lg">
            Monitor your AI agents and portfolio performance
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group relative overflow-hidden p-6 bg-background border !border-[#0000001f] hover:border-current transition-all duration-300">
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                {/* Border gradient */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border rounded-lg ${stat.borderGradient}`}
                />

                <div className={`relative z-10`}>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}
                    >
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center text-green-500 text-sm font-medium">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      {stat.change}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {stat.title}
                    </p>
                    <h3 className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        {/* Main Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="p-6 bg-background border-border">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  Portfolio Performance
                </h2>
                <p className="text-muted-foreground">Last 6 months overview</p>
              </div>
              <div className="flex gap-2">
                <button className="px-8 py-2 border-2 border-orange-500 rounded-full text-black font-semibold text-sm hover:bg-orange-500/10 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                  6M
                </button>
                <button className="px-8 py-2 border-2 border-transparent rounded-full text-black font-semibold text-sm hover:bg-orange-500/10 hover:border-orange-500/50 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                  1Y
                </button>
                <button className="px-8 py-2 border-2 border-transparent rounded-full text-black font-semibold text-sm hover:bg-orange-500/10 hover:border-orange-500/50 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                  All
                </button>
              </div>
            </div>

            <div className="h-[350px]">
              <Chart />
            </div>
          </Card>
        </motion.div>

        {/* Activity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Card className="p-6 bg-background border-border">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">
                  Recent Activity
                </h2>
                <button className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-xl bg-muted hover:bg-accent transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          Agent #123 Trade
                        </p>
                        <p className="text-sm text-muted-foreground">
                          2 minutes ago
                        </p>
                      </div>
                    </div>
                    <span className="text-green-500 font-semibold">
                      +$1,234
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Card className="p-6 bg-background border-border">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">
                  Top Performing Agents
                </h2>
                <button className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                  Manage
                </button>
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-xl bg-muted hover:bg-accent transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          Yield Optimizer #A{i + 1}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          24h Return: +15.2%
                        </p>
                      </div>
                    </div>
                    <button className="px-8 py-2 border-2 border-orange-500 rounded-full text-black font-semibold text-sm hover:bg-orange-500/10 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                      Deploy
                    </button>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
