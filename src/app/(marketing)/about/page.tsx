"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-invert mx-auto max-w-4xl"
      >
        <h1 className="mb-8 text-4xl font-bold">About Flux</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-primary-500">
              Our Vision
            </h2>
            <p className="text-lg text-gray-400">
              Flux is pioneering the future of decentralized finance through
              AI-powered automation. We believe that the complexity of DeFi
              should not be a barrier to earning optimal yields. Our platform
              democratizes access to sophisticated DeFi strategies through
              autonomous AI agents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-500">
              The Problem We're Solving
            </h2>
            <p className="text-lg text-gray-400">
              DeFi offers unprecedented opportunities for yield generation, but
              the landscape is complex and fast-moving. Manual management is
              time-consuming and often leads to missed opportunities. We're
              automating this process, allowing users to benefit from optimal
              yields without constant monitoring.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-500">
              Our Approach
            </h2>
            <p className="text-lg text-gray-400">
              Through advanced AI and machine learning, our agents continuously
              analyze the DeFi ecosystem, identifying the most profitable
              opportunities while assessing risks. Smart contracts ensure
              security and transparency, while our algorithms handle the
              complexities of yield optimization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-500">
              The Team
            </h2>
            <p className="text-lg text-gray-400">
              Our team combines expertise in artificial intelligence, blockchain
              technology, and decentralized finance. We're backed by leading
              investors in the Web3 space and are committed to building the
              future of automated DeFi portfolio management.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-500">Join Us</h2>
            <p className="text-lg text-gray-400">
              We're at the beginning of a revolution in automated DeFi. Whether
              you're a yield farmer, institutional investor, or just getting
              started in DeFi, Flux is here to help you maximize your returns
              through the power of AI.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
// 1. there is controversy in the layouts of the landing page and the layout of the marketing group
// 2. work on the design of all pages to have this feel in the images, the polyphoric feel in the first pasted image and the light theme in the second pasted image
// 3. the colors to be used for this app is red, yellow, orange not deep blue that was used in the background 
// 4. their are new components motioncomponent, background and theme-toggle implement them 