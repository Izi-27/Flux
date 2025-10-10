import { ConnectWallet } from "@/components/web3/ConnectWallet";
import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-lg">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold">
            Flux
          </Link>

          <div className="hidden space-x-8 md:flex">
            <Link href="/about" className="hover:text-primary-500">
              About
            </Link>
            <Link href="/how-it-works" className="hover:text-primary-500">
              How it Works
            </Link>
            <Link href="/pricing" className="hover:text-primary-500">
              Pricing
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ConnectWallet />
          </div>
        </nav>
      </header>

      <main className="pt-16">{children}</main>

      <footer className="mt-32 border-t border-white/10 bg-black/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold">Flux</h3>
              <p className="mt-2 text-sm text-gray-400">
                AI Agent Orchestration Platform for DeFi
              </p>
            </div>

            <div>
              <h4 className="font-medium">Platform</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/dashboard" className="hover:text-white">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/agents" className="hover:text-white">
                    Agents
                  </Link>
                </li>
                <li>
                  <Link href="/analytics" className="hover:text-white">
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">Resources</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/docs" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">Legal</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Flux. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
