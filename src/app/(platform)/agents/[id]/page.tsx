"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatAmount, formatPercentage } from "@/lib/utils";

// Sample data - replace with real data from your backend
const performanceData = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(
    Date.now() - (29 - i) * 24 * 60 * 60 * 1000
  ).toLocaleDateString(),
  value: 1000 + Math.random() * 500,
  apy: 4 + Math.random() * 8,
}));

const recentActions = [
  {
    action: "Rebalance",
    from: "Aave",
    to: "Compound",
    amount: "2,500 USDC",
    reason: "Higher APY (6.2% vs 4.5%)",
    timestamp: "2 hours ago",
  },
  {
    action: "Harvest",
    from: "Compound",
    to: null,
    amount: "25 USDC",
    reason: "Weekly rewards collection",
    timestamp: "1 day ago",
  },
  {
    action: "Rebalance",
    from: "Curve",
    to: "Aave",
    amount: "1,800 USDC",
    reason: "Risk adjustment",
    timestamp: "3 days ago",
  },
];

export default function AgentPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">USDC Yield Optimizer</h1>
            <p className="text-gray-400">
              Automatically moves USDC between lending protocols to capture the
              highest yields
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline">Withdraw</Button>
            <Button variant="gradient">Deposit</Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card variant="glass" className="p-6">
            <h3 className="text-sm font-medium text-gray-400">
              Total Value Locked
            </h3>
            <p className="mt-2 text-2xl font-semibold">$12,450</p>
            <p className="mt-1 text-sm text-green-500">+$450 (24h)</p>
          </Card>

          <Card variant="glass" className="p-6">
            <h3 className="text-sm font-medium text-gray-400">Current APY</h3>
            <p className="mt-2 text-2xl font-semibold text-primary-500">8.2%</p>
            <p className="mt-1 text-sm text-green-500">+1.2% (24h)</p>
          </Card>

          <Card variant="glass" className="p-6">
            <h3 className="text-sm font-medium text-gray-400">Total Earned</h3>
            <p className="mt-2 text-2xl font-semibold">$845</p>
            <p className="mt-1 text-sm text-green-500">+$12 (24h)</p>
          </Card>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* Performance Chart */}
          <Card variant="glass" className="mb-6 p-6">
            <h3 className="mb-6 text-lg font-medium">Performance</h3>
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
                            APY: {formatPercentage(payload[0].payload.apy)}
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

          {/* Recent Actions */}
          <Card variant="glass" className="overflow-hidden">
            <h3 className="border-b border-white/10 p-6 text-lg font-medium">
              Recent Actions
            </h3>
            <div className="divide-y divide-white/10">
              {recentActions.map((action, i) => (
                <div key={i} className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-primary-500/20 px-3 py-1 text-xs font-medium text-primary-500">
                        {action.action}
                      </div>
                      <span className="font-medium">{action.amount}</span>
                    </div>
                    <span className="text-sm text-gray-400">
                      {action.timestamp}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>{action.from}</span>
                    {action.to && (
                      <>
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                        <span>{action.to}</span>
                      </>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-gray-400">{action.reason}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Settings */}
        <Card variant="glass" className="h-fit p-6">
          <h3 className="mb-6 text-lg font-medium">Agent Settings</h3>

          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Risk Tolerance
              </label>
              <select
                title="Risk Tolerance"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm"
              >
                <option>Conservative</option>
                <option>Moderate</option>
                <option>Aggressive</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Rebalancing Threshold
              </label>
              <select
                title="Rebalancing Threshold"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm"
              >
                <option>0.5%</option>
                <option>1.0%</option>
                <option>2.0%</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Supported Protocols
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" defaultChecked />
                  Aave
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" defaultChecked />
                  Compound
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" defaultChecked />
                  Curve
                </label>
              </div>
            </div>

            <div>
              <Button variant="outline" className="w-full">
                Update Settings
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
