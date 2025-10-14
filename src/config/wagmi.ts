"use client";

import { http } from "wagmi";
import { polygon, polygonAmoy, polygonZkEvmCardona, polygonZkEvm, polygonZkEvmTestnet } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID_HERE'

// Create connectors only once
const walletConnectConnector = walletConnect({ projectId });
const metaMaskConnector = metaMask();
const injectedConnector = injected();
const safeConnector = safe();

const connectors = [
  injectedConnector,
  metaMaskConnector,
  safeConnector,
  walletConnectConnector
];

export const wagmiConfig = {
  chains: [polygon, polygonAmoy, polygonZkEvmCardona, polygonZkEvm, polygonZkEvmTestnet],
  connectors,
  transports: {
    [polygon.id]: http(),
    [polygonAmoy.id]: http(),
    [polygonZkEvmCardona.id]: http(),
    [polygonZkEvm.id]: http(),
    [polygonZkEvmTestnet.id]: http(),
  },     
  ssr: true
} as const;