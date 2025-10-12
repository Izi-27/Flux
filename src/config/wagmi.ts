"use client";

import { http } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID_HERE'

// Create connectors only once
const connectors = [
  injected(),
  metaMask(),
  safe(),
  walletConnect({ projectId })
];

export const wagmiConfig = {
  chains: [polygon, polygonMumbai],
  connectors,
  transports: {
    [polygon.id]: http(),
    [polygonMumbai.id]: http(),
  },
  ssr: true // Enable server-side rendering
} as const;