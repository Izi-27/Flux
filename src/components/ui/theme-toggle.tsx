"use client";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "../providers/theme-provider";
import { useState } from "react";
import { motion } from "framer-motion";

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
        className="relative h-9 w-9 rounded-md border border-orange-500/20 hover:bg-orange-500/10 transition-all duration-200 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {theme === "dark" ? (
          <Moon className="h-5 w-5 text-orange-400" />
        ) : theme === "light" ? (
          <Sun className="h-5 w-5 text-orange-500" />
        ) : (
          <Monitor className="h-5 w-5 text-orange-500" />
        )}
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-40 rounded-lg border border-orange-500/20 bg-[hsl(var(--theme-background))] backdrop-blur-xl p-1 z-50"
        >
          {[
            { icon: Sun, label: "Light", value: "light" as Theme },
            { icon: Moon, label: "Dark", value: "dark" as Theme },
            { icon: Monitor, label: "System", value: "system" as Theme },
          ].map(({ icon: Icon, label, value }) => (
            <motion.button
              type="button"
              key={value}
              onClick={() => {
                setTheme(value);
                setIsOpen(false);
              }}
              className={`
                flex w-full items-center space-x-2 px-3 py-2 rounded
                ${
                  theme === value
                    ? "bg-orange-500/20 text-orange-500"
                    : "hover:bg-orange-500/10"
                }
                transition-colors
              `}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon
                className={`h-4 w-4 ${
                  theme === value ? "text-orange-500" : "text-orange-400"
                }`}
              />
              <span className="text-sm">{label}</span>
              {theme === value && <span className="ml-auto">✓</span>}
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
