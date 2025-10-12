"use client";

import { ConnectWallet } from "@/components/web3/connect-wallet";
import AppSidebar from "@/components/shared/appsidebar";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { PageLoader } from "@/components/ui/page-loader";

import { useRouter } from "next/navigation";
import Link from "next/link";

function PlatformHeader() {
  const router = useRouter();
  const marketingLinks = [
    // { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <header className="sticky top-0 ml-10 z-30 bg-background/80 backdrop-blur-xl transition-all duration-300">
      <div className="flex h-16 items-center justify-between px-4">
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {marketingLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-orange-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <ConnectWallet onConnect={() => router.push("/dashboard")} />
        </div>
      </div>
    </header>
  );
}

function PlatformContent({ children }: { children: React.ReactNode }) {
  const { state } = useSidebar();
  const isCollapsed = state  === "collapsed";

  return (
    <div className="min-h-screen w-full bg-background">
      <PageLoader />
      <div className="flex">
        <AppSidebar />

        <div
          className={`
            flex-1 flex flex-col overflow-hidden
            transition-all duration-300 ease-in-out
            ${isCollapsed ? "ml-[4.3rem]" : "ml-64"}
          `}
        >
          {/* Header */}
          <PlatformHeader />

          {/* Main content */}
          <main className="flex-1 overflow-auto bg-background text-foreground transition-colors duration-300 border-t border-orange-500/20">
            <div
              className={`
                min-h-screen w-full px-4 py-6 
                transition-all duration-300 ease-in-out 
                sm:px-6 lg:px-8
                ${
                  isCollapsed
                    ? "max-w-[calc(100vw-4.3rem)]"
                    : "max-w-[calc(100vw-16rem)]"
                }
              `}
            >
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <PlatformContent>{children}</PlatformContent>
    </SidebarProvider>
  );
}
