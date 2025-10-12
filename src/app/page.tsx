"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Hero = dynamic(
  () => import("@/components/landing").then((mod) => mod.Hero),
  { ssr: true }
);
const Features = dynamic(
  () => import("@/components/landing").then((mod) => mod.Features),
  { ssr: true }
);
const Stats = dynamic(
  () => import("@/components/landing").then((mod) => mod.Stats),
  { ssr: true }
);
const CTA = dynamic(
  () => import("@/components/landing").then((mod) => mod.CTA),
  { ssr: true }
);

const FloatingOrbs = dynamic(
  () => import("@/components/ui/background").then((mod) => mod.FloatingOrbs),
  {
    ssr: false,
    loading: () => <div className="fixed inset-0 -z-10" />,
  }
);

const WaveBackground = dynamic(
  () => import("@/components/ui/background").then((mod) => mod.WaveBackground),
  {
    ssr: false,
    loading: () => <div className="fixed inset-0 -z-10" />,
  }
);
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ConnectWallet } from "@/components/web3/connect-wallet";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style>{`
        .dark { --bg: 0 0% 0%; }
        .light { --bg: 0 0% 100%; }
      `}</style>

      <Suspense fallback={<div className="fixed inset-0 -z-10" />}>
        {/* <FloatingOrbs /> */}
        {/* <WaveBackground /> */}
      </Suspense>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-orange-500/10 bg-black/20 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            FLUX
          </div>
          <ConnectWallet />
        </div>
      </header>

      <main className="pt-20">
        <Suspense
          fallback={
            <div className="animate-pulse w-full h-screen bg-gradient-to-b from-black via-dark-900 to-black" />
          }
        >
          <Hero />
        </Suspense>
        <Suspense
          fallback={
            <div className="animate-pulse w-full py-32 bg-gradient-to-b from-black via-dark-900 to-black" />
          }
        >
          <Features />
        </Suspense>
        <Suspense
          fallback={
            <div className="animate-pulse w-full py-20 bg-gradient-to-b from-black via-dark-900 to-black" />
          }
        >
          <Stats />
        </Suspense>
        <Suspense
          fallback={
            <div className="animate-pulse w-full py-20 bg-gradient-to-b from-black via-dark-900 to-black" />
          }
        >
          <CTA />
        </Suspense>
      </main>

      <footer className="border-t border-orange-500/10 py-8 text-center text-gray-500">
        <p>© 2025 Flux. All rights reserved.</p>
      </footer>
    </div>
  );
}
