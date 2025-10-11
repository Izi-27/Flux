"use client";

import { http } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID_HERE'

export const wagmiConfig = {
  chains: [polygon, polygonMumbai],
    connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [polygon.id]: http(),
    [polygonMumbai.id]: http(),
  },
} as const;