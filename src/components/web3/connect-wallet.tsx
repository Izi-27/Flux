"use client";

import { Button } from "@/components/ui/button";
import { formatAddress } from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function ConnectWallet() {
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
                    onClick={openConnectModal} 
                    variant="gradient"
                    className="hover:animate-pulse"
                  >
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button onClick={openChainModal} variant="destructive">
                    Wrong network
                  </Button>
                );
              }

              return (
                <div className="flex items-center gap-4">
                  <Button
                    onClick={openChainModal}
                    variant="outline"
                    className="hidden sm:flex"
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

                  <Button onClick={openAccountModal} variant="outline">
                    {account.ensAvatar && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        alt="ENS Avatar"
                        src={account.ensAvatar}
                        className="mr-2 h-4 w-4 rounded-full"
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
