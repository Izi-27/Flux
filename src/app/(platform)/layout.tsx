"use client";

import { ConnectWallet } from "@/components/web3/connect-wallet";
import AppSidebar from "@/components/shared/appsidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-dark-900">
        <AppSidebar />

        {/* Header */}
        <header className="fixed top-0 right-0 left-64 z-30 border-b border-white/10 bg-black/50 backdrop-blur-xl">
          <div className="flex h-16 items-center justify-end gap-4 px-4">
            <div className="flex items-center gap-4">
              <ConnectWallet />
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="pl-64 pt-16">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
