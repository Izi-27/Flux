import { ConnectWallet } from "@/components/web3/connect-wallet";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/shared/header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 via-yellow-500 to-red-500 dark:from-gray-900 dark:to-black text-black dark:text-white">
      <Header />

      <main className="pt-16">{children}</main>

      <footer className="mt-32 border-t border-white/10 bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-red-500/10 dark:from-black/50 dark:to-black/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg font-semibold bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 bg-clip-text text-transparent"
              >
                Flux
              </motion.h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                AI Agent Orchestration Platform for DeFi
              </p>
            </div>

            <div>
              <h4 className="font-medium text-black dark:text-white">
                Platform
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <Link
                    href="/platform/dashboard"
                    className="hover:text-primary transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform/agents"
                    className="hover:text-primary transition-colors"
                  >
                    Agents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform/analytics"
                    className="hover:text-primary transition-colors"
                  >
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-black dark:text-white">
                Resources
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <Link
                    href="/docs"
                    className="hover:text-primary transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-primary transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-black dark:text-white">Legal</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-gray-600 dark:text-gray-400"
          >
            © {new Date().getFullYear()} Flux. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
