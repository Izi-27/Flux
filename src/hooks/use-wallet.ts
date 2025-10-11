"use client"

import * as React from "react";
import { 
  useAccount, 
  useConnect, 
  useDisconnect, 
  useBalance, 
  useChainId,
  type Config,
  type UseConnectReturnType,
  type UseBalanceReturnType
} from "wagmi";
import { formatAddress } from "@/lib/utils";

type WalletHookReturn = {
  address: `0x${string}` | undefined;
  isConnected: boolean;
  status: 'connected' | 'connecting' | 'disconnected' | 'reconnecting';
  chainId: number;
  formattedAddress: string | undefined;
  balance: UseBalanceReturnType['data'];
  connectors: UseConnectReturnType['connectors'];
  connect: UseConnectReturnType['connect'];
  disconnect: () => void;
  error: UseConnectReturnType['error'];
  isConnecting: boolean;
};

export function useWallet(): WalletHookReturn {
  const { address, isConnected, status } = useAccount();
  const chainId = useChainId();
  const { connectors, connect, error, status: connectStatus } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({
    address: address
  });

  // Handle connection state changes
  React.useEffect(() => {
    if (status === 'connected') {
      console.log('Wallet connected:', address);
    } else if (status === 'disconnected') {
      console.log('Wallet disconnected');
    }
  }, [status, address]);

  // Handle errors
  React.useEffect(() => {
    if (error) {
      console.error('Wallet connection error:', error.message);
    }
  }, [error]);

  return {
    address,
    isConnected,
    status,
    chainId,
    formattedAddress: address ? formatAddress(address) : undefined,
    balance,
    connectors,
    connect,
    disconnect,
    error,
    isConnecting: connectStatus === 'pending',
  };
}