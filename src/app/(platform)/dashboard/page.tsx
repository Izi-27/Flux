"use client";

import { Card } from "@/components/ui/Card";
import { useWallet } from "@/hooks/useWallet";
import { formatAmount, formatPercentage } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Sample data - replace with real data from your backend
const performanceData = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(
    Date.now() - (29 - i) * 24 * 60 * 60 * 1000
  ).toLocaleDateString(),
  value: 1000 + Math.random() * 500,
}));

const stats = [
  {
    name: "Total Value Locked",
    value: "$24,685.00",
    change: "+12.3%",
    isPositive: true,
  },
  {
    name: "Current APY",
    value: "8.45%",
    change: "+2.1%",
    isPositive: true,
  },
  {
    name: "Total Earnings",
    value: "$1,245.00",
    change: "+$145.00",
    isPositive: true,
  },
  {
    name: "Active Agents",
    value: "2",
    change: "No change",
    isPositive: null,
  },
];

const recentActivity = [
  {
    type: "DEPOSIT",
    amount: "1,000 USDC",
    timestamp: "2 hours ago",
    protocol: "Aave",
    apy: "4.5%",
  },
  {
    type: "WITHDRAW",
    amount: "500 USDC",
    timestamp: "1 day ago",
    protocol: "Compound",
    apy: "3.8%",
  },
  {
    type: "REBALANCE",
    amount: "2,500 USDC",
    timestamp: "2 days ago",
    protocol: "Curve",
    apy: "6.2%",
  },
];

export default function DashboardPage() {
  const { isConnected, formattedAddress } = useWallet();

  if (!isConnected) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <Card variant="glass" className="p-6 text-center">
          <h2 className="mb-4 text-xl font-semibold">
            Connect your wallet to view your dashboard
          </h2>
          <p className="text-gray-400">
            You need to connect your wallet to see your portfolio and agent
            status.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Stats */}
      <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="glass" className="p-6">
              <h3 className="text-sm font-medium text-gray-400">{stat.name}</h3>
              <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
              {stat.change && (
                <p
                  className={`mt-1 text-sm ${
                    stat.isPositive === null
                      ? "text-gray-400"
                      : stat.isPositive
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {stat.change}
                </p>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <Card variant="glass" className="p-6">
          <h3 className="mb-6 text-lg font-medium">Portfolio Value</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="rgb(34, 197, 94)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="rgb(34, 197, 94)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="date"
                  stroke="#4b5563"
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis
                  stroke="#4b5563"
                  fontSize={12}
                  tickLine={false}
                  tickFormatter={(value) => `$${formatAmount(value)}`}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (!active || !payload?.length) return null;
                    return (
                      <div className="rounded-lg border border-white/10 bg-black/90 p-3 backdrop-blur-lg">
                        <p className="font-medium">
                          ${formatAmount(payload[0].value)}
                        </p>
                        <p className="text-sm text-gray-400">
                          {payload[0].payload.date}
                        </p>
                      </div>
                    );
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="rgb(34, 197, 94)"
                  fill="url(#gradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card variant="glass" className="overflow-hidden">
          <h3 className="border-b border-white/10 p-6 text-lg font-medium">
            Recent Activity
          </h3>
          <div className="divide-y divide-white/10">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-center justify-between p-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        activity.type === "DEPOSIT"
                          ? "bg-green-500/20 text-green-500"
                          : activity.type === "WITHDRAW"
                          ? "bg-red-500/20 text-red-500"
                          : "bg-blue-500/20 text-blue-500"
                      }`}
                    >
                      {activity.type}
                    </div>
                    <span className="font-medium">{activity.amount}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-400">
                    {activity.timestamp}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{activity.protocol}</p>
                  <p className="text-sm text-primary-500">{activity.apy} APY</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
