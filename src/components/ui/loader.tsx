"use client";

import { motion } from "framer-motion";

interface LoaderProps {
  fullScreen?: boolean;
  className?: string;
}

export function Loader({ fullScreen = false, className = "" }: LoaderProps) {
  const Container = fullScreen ? "div" : motion.div;
  const containerClass = fullScreen
    ? "fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
    : `flex items-center justify-center ${className}`;

  return (
    <Container className={containerClass}>
      <motion.div
        className="relative flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center">
          <div className="relative h-24 w-24">
            {/* Orange gradient ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent"
              style={{
                borderTopColor: "#f97316",
                borderRightColor: "#f97316",
                borderBottomColor: "#f9731620",
                borderLeftColor: "#f9731620",
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Inner gradient ring */}
            <motion.div
              className="absolute inset-2 rounded-full border-4 border-transparent"
              style={{
                borderTopColor: "#f9731640",
                borderRightColor: "#f9731640",
                borderBottomColor: "#f9731610",
                borderLeftColor: "#f9731610",
              }}
              animate={{ rotate: -180 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </div>
      </motion.div>
    </Container>
  );
}
