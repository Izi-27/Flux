"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

const agents = [
  {
    id: "usdc-yield",
    name: "USDC Yield Optimizer",
    description:
      "Automatically moves USDC between lending protocols to capture the highest yields",
    status: "active",
    tvl: "$12,450",
    apy: "8.2%",
    protocols: ["Aave", "Compound", "Curve"],
  },
  {
    id: "eth-yield",
    name: "ETH Yield Aggregator",
    description:
      "Optimizes staked ETH positions across liquid staking protocols",
    status: "inactive",
    tvl: "$8,230",
    apy: "5.1%",
    protocols: ["Lido", "Rocket Pool", "StakeWise"],
  },
  {
    id: "btc-yield",
    name: "BTC Yield Maximizer",
    description: "Manages wrapped BTC positions to generate optimal yield",
    status: "active",
    tvl: "$15,780",
    apy: "4.8%",
    protocols: ["Aave", "Compound", "Curve"],
  },
];

export default function AgentsPage() {
  return (
    <div className="p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">AI Agents</h1>
          <p className="text-gray-400">
            Deploy and manage autonomous AI agents for yield optimization
          </p>
        </div>

        <Button variant="gradient">Deploy New Agent</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              variant="glass"
              className="group relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{agent.name}</h3>
                  <div
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      agent.status === "active"
                        ? "bg-green-500/20 text-green-500"
                        : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {agent.status}
                  </div>
                </div>

                <p className="mb-4 text-sm text-gray-400">
                  {agent.description}
                </p>

                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">TVL</p>
                    <p className="font-semibold">{agent.tvl}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Current APY</p>
                    <p className="font-semibold text-primary-500">
                      {agent.apy}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {agent.protocols.map((protocol) => (
                    <div
                      key={protocol}
                      className="rounded-full bg-white/5 px-2 py-1 text-xs"
                    >
                      {protocol}
                    </div>
                  ))}
                </div>

                <div className="absolute inset-x-0 bottom-0 flex translate-y-full border-t border-white/10 bg-white/5 p-4 transition-transform group-hover:translate-y-0">
                  <Button variant="gradient" className="w-full">
                    Manage Agent
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        {/* Add New Agent Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: agents.length * 0.1 }}
        >
          <Card
            variant="glass"
            className="flex min-h-[300px] cursor-pointer items-center justify-center p-6 transition-all hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-xl"
          >
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-gray-400">
                <svg
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Deploy New Agent</h3>
              <p className="text-sm text-gray-400">
                Create and configure a new AI agent for your portfolio
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
