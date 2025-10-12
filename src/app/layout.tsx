import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "@/components/providers/web3-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LoadingProvider } from "@/components/providers/loading-provider";
import { FloatingOrbs, WaveBackground } from "@/components/ui/background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flux AI - Web3 AI Agent Platform",
  description: "AI-powered DeFi yield optimization platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-black dark:text-white`}
      >
        <ThemeProvider defaultTheme="dark">
          <Web3Provider>
            <FloatingOrbs />
            {children}
          </Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
