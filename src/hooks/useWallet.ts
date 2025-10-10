"use client"

import { useAccount, useNetwork } from "wagmi"
import { formatAddress } from "@/lib/utils"

export function useWallet() {
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()

  return {
    address,
    isConnected,
    chain,
    formattedAddress: address ? formatAddress(address) : undefined,
    isTestnet: chain?.testnet ?? false,
  }
}