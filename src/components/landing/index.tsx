"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { AnimatedSphere } from "./AnimatedSphere";
import { Button } from "../ui/Button";

function Hero() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
        </Canvas>
      </div>

      <div className="relative flex min-h-screen items-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-5xl font-bold md:text-7xl"
          >
            AI-Powered <span className="text-primary-500">DeFi</span> <br />
            Agent Orchestration
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-8 max-w-2xl text-xl text-gray-400"
          >
            Deploy autonomous AI agents to optimize your DeFi portfolio. Our
            platform automatically moves funds to the highest-yielding
            opportunities on Polygon.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "24/7 Yield Optimization",
      description:
        "Our AI agents never sleep, constantly monitoring and moving funds to capture the best yields across Polygon DeFi.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Smart Risk Management",
      description:
        "Advanced algorithms assess protocol risks and optimize for the best risk-adjusted returns on your portfolio.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Non-Custodial Security",
      description:
        "Your funds remain under your control through secure smart contracts. No need to trust us with custody.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center text-4xl font-bold"
        >
          Why Choose Flux?
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
            >
              <div className="mb-4 rounded-lg bg-primary-500/10 p-2 w-fit">
                {feature.icon}
              </div>
              <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Connect Your Wallet",
      description:
        "Connect your Web3 wallet securely to get started with automated yield farming.",
    },
    {
      title: "Choose Your Strategy",
      description:
        "Select from our range of AI agents, each specialized in different yield optimization strategies.",
    },
    {
      title: "Deploy Your Agent",
      description:
        "With one click, your AI agent begins working 24/7 to optimize your yields across DeFi.",
    },
  ];

  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center text-4xl font-bold"
        >
          How It Works
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 mx-auto">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "$24M+", label: "Total Value Locked" },
    { value: "8.4%", label: "Average APY" },
    { value: "24/7", label: "Active Monitoring" },
    { value: "100%", label: "Non-Custodial" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary-500">
                {stat.value}
              </p>
              <p className="mt-2 text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-primary-500/10 to-purple-500/10 p-12 text-center backdrop-blur-lg">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Optimize Your DeFi Portfolio?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-400">
            Join the future of automated DeFi portfolio management. Deploy your
            first AI agent in minutes.
          </p>
          <Button variant="gradient" size="lg">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
}

export { Hero, Features, HowItWorks, Stats, CTA };
