"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ConnectWallet } from "@/components/web3/connect-wallet";
import { FloatingOrbs, WaveBackground } from "@/components/ui/background";

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const rotate = useTransform(scrollY, [0, 1000], [0, -5]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background text-foreground transition-colors duration-300">
      <div className="absolute inset-0 z-0">
        <WaveBackground />
        <FloatingOrbs />
      </div>
      <motion.div
        style={{ y, opacity, scale, rotateX: rotate }}
        className="container mx-auto px-4 text-center relative z-10 perspective-1000"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            className="mb-6 text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 1.2,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            AI-Powered <br />
            <span className="text-7xl md:text-9xl">DeFi</span> <br />
            Agent Orchestration
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto mb-12 max-w-3xl text-xl md:text-2xl text-gray-300 dark:text-gray-400"
        >
          Deploy autonomous AI agents to optimize your DeFi portfolio. Our
          platform automatically moves funds to the highest-yielding
          opportunities on Polygon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <ConnectWallet />
          <button
            type="button"
            className="px-8 py-4 border-2 border-orange-500 rounded-full text-white font-semibold text-lg hover:bg-orange-500/10 transition-all duration-300"
          >
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Features Section
function Features() {
  const features = [
    {
      title: "24/7 Yield Optimization",
      description:
        "Our AI agents never sleep, constantly monitoring and moving funds to capture the best yields across Polygon DeFi.",
      gradient: "from-red-500/20 to-orange-500/20",
      icon: "⚡",
    },
    {
      title: "Smart Risk Management",
      description:
        "Advanced algorithms assess protocol risks and optimize for the best risk-adjusted returns on your portfolio.",
      gradient: "from-orange-500/20 to-yellow-500/20",
      icon: "🛡️",
    },
    {
      title: "Non-Custodial Security",
      description:
        "Your funds remain under your control through secure smart contracts. No need to trust us with custody.",
      gradient: "from-yellow-500/20 to-orange-500/20",
      icon: "🔒",
    },
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
        >
          Why Choose Flux?
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`rounded-2xl border border-orange-500/20 bg-gradient-to-br ${feature.gradient} backdrop-blur-xl p-8 transition-all duration-300`}
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats Section
function Stats() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const stats = [
    { value: "$24M+", label: "Total Value Locked" },
    { value: "8.4%", label: "Average APY" },
    { value: "24/7", label: "Active Monitoring" },
    { value: "100%", label: "Non-Custodial" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div style={{ y }} className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4 relative">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                bounce: 0.4,
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              className="text-center transform-gpu"
            >
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3"
              >
                {stat.value}
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.5 }}
                className="text-gray-400 text-lg"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-orange-500/30 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-xl p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-yellow-500/5 animate-pulse" />

          <h2 className="mb-6 text-4xl md:text-5xl font-bold text-white relative z-10">
            Ready to Optimize Your DeFi Portfolio?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-300 relative z-10">
            Join the future of automated DeFi portfolio management. Deploy your
            first AI agent in minutes.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full text-white font-bold text-xl shadow-2xl shadow-orange-500/50 relative z-10"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export { Hero, Features, Stats, CTA };
