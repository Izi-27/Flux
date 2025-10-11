"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Activity, TrendingUp, DollarSign, Users } from "lucide-react";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 },
];

const statsCards = [
  {
    title: "Total Value Locked",
    value: "$1.2M",
    change: "+12.5%",
    icon: DollarSign,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Active Agents",
    value: "245",
    change: "+5.2%",
    icon: Users,
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Total Trades",
    value: "1.5K",
    change: "+8.1%",
    icon: Activity,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Profit/Loss",
    value: "+$50.2K",
    change: "+15.3%",
    icon: TrendingUp,
    color: "from-yellow-500 to-orange-500",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 p-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 bg-gradient-to-br bg-opacity-10 dark:bg-opacity-10 backdrop-blur-lg border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <h3
                    className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </h3>
                  <p className="text-sm font-medium text-green-500">
                    {stat.change}
                  </p>
                </div>
                <div
                  className={`p-3 rounded-full bg-gradient-to-r ${stat.color} bg-opacity-10`}
                >
                  <stat.icon className="h-6 w-6 text-white" />
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
        transition={{ delay: 0.4 }}
      >
        <Card className="p-6 h-[400px] bg-gradient-to-br from-black/5 to-black/10 dark:from-white/5 dark:to-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-6">Portfolio Performance</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#888888" />
              <YAxis stroke="#888888" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="url(#gradient)"
                strokeWidth={2}
                dot={false}
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff6b6b" />
                  <stop offset="100%" stopColor="#ffa07a" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>

      {/* Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6 bg-gradient-to-br from-black/5 to-black/10 dark:from-white/5 dark:to-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg bg-white/5 dark:bg-black/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                      <Activity className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Agent #123 Trade</p>
                      <p className="text-sm text-gray-500">2 minutes ago</p>
                    </div>
                  </div>
                  <span className="text-green-500">+$1,234</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-6 bg-gradient-to-br from-black/5 to-black/10 dark:from-white/5 dark:to-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4">
              Top Performing Agents
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg bg-white/5 dark:bg-black/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Yield Optimizer #A{i + 1}</p>
                      <p className="text-sm text-gray-500">
                        24h Return: +15.2%
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm">
                    Deploy
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}