"use client"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "../providers/theme-provider"
import { useState } from "react";
import { motion } from "framer-motion"

type Theme = "light" | "dark" | "system";


export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <motion.button
        aria-label="Toggle Theme"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative h-9 w-9 rounded-md border border-orange-500/20 bg-glass hover:bg-orange-500/10 transition-all duration-200 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-orange-400" />
      </motion.button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg border border-orange-500/20 bg-black/90 dark:bg-black/90 backdrop-blur-xl p-1 z-50">
          {[
            { icon: Sun, label: "Light", value: "light" as Theme },
            { icon: Moon, label: "Dark", value: "dark" as Theme },
            { icon: Monitor, label: "System", value: "system" as Theme }
          ].map(({ icon: Icon, label, value }) => (
            <button
              type="button"
              key={value}
              onClick={() => {
                setTheme(value);
                setIsOpen(false);
              }}
              className="flex w-full items-center space-x-2 px-3 py-2 rounded hover:bg-orange-500/10 transition-colors"
            >
              <Icon className="h-4 w-4 text-orange-400" />
              <span className="text-sm text-white">{label}</span>
              {theme === value && <span className="ml-auto text-orange-500">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}