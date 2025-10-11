"use client";

import Link from "next/link";
import { ConnectWallet } from "../web3/connect-wallet";
import { ThemeToggle } from "../ui/theme-toggle";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const linkVariants = {
  hover: { scale: 1.05, color: "var(--primary)" },
};

export function Header() {
  const pathname = usePathname();
  const isPlatform = pathname?.startsWith("/");

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-red-500/10 backdrop-blur-lg dark:from-black/50 dark:to-black/50"
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href={isPlatform ? "/dashboard" : "/"}
            className="text-xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 bg-clip-text text-transparent"
          >
            {isPlatform ? "Flux Platform" : "Flux"}
          </Link>
        </motion.div>

        <div className="hidden space-x-8 md:flex">
          {isPlatform ? (
            <>
              {[
                ["Dashboard", "dashboard"],
                ["Agents", "agents"],
                ["Analytics", "analytics"],
                ["Portfolio", "portfolio"],
                ["Settings", "settings"],
              ].map(([name, href]) => (
                <motion.div
                  key={name}
                  whileHover="hover"
                  variants={linkVariants}
                >
                  <Link
                    href={href}
                    className={`transition-colors ${
                      pathname === href ? "text-accent" : "hover:text-primary"
                    }`}
                  >
                    {name}
                  </Link>
                </motion.div>
              ))}
            </>
          ) : (
            <>
              {[
                ["About", "/about"],
                ["How it Works", "/how-it-works"],
                ["Pricing", "/pricing"],
              ].map(([name, href]) => (
                <motion.div
                  key={name}
                  whileHover="hover"
                  variants={linkVariants}
                >
                  <Link
                    href={href}
                    className={`transition-colors ${
                      pathname === href ? "text-accent" : "hover:text-primary"
                    }`}
                  >
                    {name}
                  </Link>
                </motion.div>
              ))}
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.05 }}>
            <ConnectWallet />
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
}
