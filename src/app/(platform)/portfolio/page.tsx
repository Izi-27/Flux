"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  History,
  Eye,
  EyeOff,
} from "lucide-react";
import { useState } from "react";

const portfolioData = {
  totalValue: 25420.65,
  dailyChange: 1250.32,
  dailyChangePercentage: 4.92,
  assets: [
    {
      name: "USDC",
      value: 15000,
      allocation: 59,
      apy: 8.2,
      protocol: "Aave",
    },
    {
      name: "ETH",
      value: 8420.65,
      allocation: 33,
      apy: 5.1,
      protocol: "Lido",
    },
    {
      name: "MATIC",
      value: 2000,
      allocation: 8,
      apy: 12.4,
      protocol: "Balancer",
    },
  ],
  recentTransactions: [
    {
      type: "Deposit",
      asset: "USDC",
      amount: 5000,
      timestamp: "2025-10-12T09:30:00Z",
      status: "completed",
    },
    {
      type: "Withdraw",
      asset: "ETH",
      amount: 1.2,
      timestamp: "2025-10-11T15:45:00Z",
      status: "completed",
    },
    {
      type: "Rebalance",
      asset: "MATIC",
      amount: 500,
      timestamp: "2025-10-10T12:20:00Z",
      status: "completed",
    },
  ],
};

export default function PortfolioPage() {
  const [hideValues, setHideValues] = useState(false);

  const formatCurrency = (value: number) => {
    return hideValues
      ? "****"
      : new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className="space-y-8">
      {/* Portfolio Overview */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Portfolio Overview</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setHideValues(!hideValues)}
          className="flex items-center gap-2"
        >
          {hideValues ? (
            <>
              <Eye className="h-4 w-4" />
              <span>Show Values</span>
            </>
          ) : (
            <>
              <EyeOff className="h-4 w-4" />
              <span>Hide Values</span>
            </>
          )}
        </Button>
      </div>

      {/* Portfolio Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6 bg-black/50 border-orange-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Value</p>
                <p className="text-2xl font-semibold mt-1">
                  {formatCurrency(portfolioData.totalValue)}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-orange-500/10">
                <Wallet className="h-6 w-6 text-orange-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              {portfolioData.dailyChange > 0 ? (
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-500" />
              )}
              <span
                className={
                  portfolioData.dailyChange > 0
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {formatCurrency(Math.abs(portfolioData.dailyChange))} (
                {portfolioData.dailyChangePercentage}%)
              </span>
              <span className="text-gray-400">24h</span>
            </div>
          </Card>
        </motion.div>

        {/* Asset Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="sm:col-span-2 lg:col-span-2"
        >
          <Card className="p-6 bg-black/50 border-orange-500/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Asset Distribution</h3>
              <div className="p-2 rounded-lg bg-orange-500/10">
                <PieChart className="h-5 w-5 text-orange-500" />
              </div>
            </div>
            <div className="space-y-4">
              {portfolioData.assets.map((asset) => (
                <div
                  key={asset.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <span className="font-semibold text-orange-500">
                        {asset.name}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{asset.name}</p>
                      <p className="text-sm text-gray-400">{asset.protocol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatCurrency(asset.value)}</p>
                    <p className="text-sm">
                      <span className="text-gray-400">
                        {formatPercentage(asset.allocation)}
                      </span>
                      <span className="text-green-500 ml-2">
                        APY: {formatPercentage(asset.apy)}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Recent Transactions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6 bg-black/50 border-orange-500/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <div className="p-2 rounded-lg bg-orange-500/10">
              <History className="h-5 w-5 text-orange-500" />
            </div>
          </div>
          <div className="space-y-4">
            {portfolioData.recentTransactions.map((tx, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`
                    w-10 h-10 rounded-lg flex items-center justify-center
                    ${
                      tx.type === "Deposit"
                        ? "bg-green-500/10"
                        : "bg-red-500/10"
                    }
                  `}
                  >
                    {tx.type === "Deposit" ? (
                      <ArrowUpRight
                        className={`h-5 w-5 ${
                          tx.type === "Deposit"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      />
                    ) : (
                      <ArrowDownRight
                        className={`h-5 w-5 ${
                          tx.type === "Deposit"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{tx.type}</p>
                    <p className="text-sm text-gray-400">
                      {new Date(tx.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {tx.type === "Deposit" ? "+" : "-"} {tx.amount} {tx.asset}
                  </p>
                  <p className="text-sm text-gray-400 capitalize">
                    {tx.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
