"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    title: "Connect Your Wallet",
    description:
      "Connect your Web3 wallet to get started. We support MetaMask, WalletConnect, and other popular wallets.",
    icon: "🔗",
  },
  {
    title: "Deposit Funds",
    description:
      "Deposit your crypto into our secure Agent Vault smart contract. You maintain full control of your funds at all times.",
    icon: "💰",
  },
  {
    title: "Select Your Strategy",
    description:
      "Choose from our range of AI agents, each specialized in different yield optimization strategies.",
    icon: "🎯",
  },
  {
    title: "Activate Your Agent",
    description:
      "With one click, your AI agent begins working 24/7 to optimize your yields across the DeFi ecosystem.",
    icon: "🤖",
  },
  {
    title: "Monitor Performance",
    description:
      "Track your portfolio's performance, yields, and agent actions through our intuitive dashboard.",
    icon: "📊",
  },
  {
    title: "Withdraw Anytime",
    description:
      "Your funds are accessible at any time. Withdraw partially or fully with no lock-up period.",
    icon: "🔄",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-6 text-4xl font-bold">How Flux Works</h1>
          <p className="mb-12 text-xl text-gray-400">
            Get started with automated DeFi yield optimization in minutes.
            Here's how our platform works:
          </p>
        </motion.div>

        <div className="relative space-y-12">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="glass" className="relative ml-16">
                <div className="absolute -left-16 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-2xl">
                  {step.icon}
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="mb-6 text-2xl font-semibold">
            Ready to Start Optimizing Your Yields?
          </h2>
          <Link href="/dashboard">
            <Button size="lg" variant="gradient">
              Launch App
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
