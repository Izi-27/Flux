"use client";

import { Button } from "@/components/ui/button";
import { formatAddress } from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

interface ConnectWalletProps {
  onConnect?: () => void;
}

export function ConnectWallet({ onConnect }: ConnectWalletProps = {}) {
  const router = useRouter();

  const handleConnect = useCallback(() => {
    if (onConnect) {
      onConnect();
    } else {
      router.push("/dashboard");
    }
  }, [onConnect, router]);
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        useEffect(() => {
          if (connected) {
            handleConnect();
          }
        }, [connected, handleConnect]);

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    onClick={() => {
                      openConnectModal();
                    }}
                    variant="gradient"
                    className="hover:animate-pulse px-8 tracking-wider cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold shadow-md shadow-orange-500/50"
                  >
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button onClick={openChainModal} variant="destructive" className="hover:animate-pulse px-8 tracking-wider cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold shadow-md shadow-orange-500/50">
                    Wrong network
                  </Button>
                );
              }

              return (
                <div className="flex items-center gap-4">
                  <Button
                    onClick={openChainModal}
                    variant="outline"
                    className="hidden sm:flex hover:animate-pulse px-8 tracking-wider cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold shadow-md shadow-orange-500/50"
                  >
                    {chain.hasIcon && (
                      <div className="mr-2 h-4 w-4">
                        {chain.iconUrl && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            className="h-4 w-4"
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </Button>

                  <Button onClick={openAccountModal} variant="outline" className="hover:animate-pulse px-8 tracking-wider cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold shadow-md shadow-orange-500/50">
                    {account.ensAvatar && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        alt="ENS Avatar"
                        src={account.ensAvatar}
                        className="mr-2 h-4 w-4 rounded-full object-cover"
                      />
                    )}
                    {account.ensName ?? formatAddress(account.address)}
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
