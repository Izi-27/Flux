"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const cardVariants = cva(
  "rounded-lg bg-card border !border-orange-500/20 text-card-foreground transition-all backdrop-blur-md",
  {
    variants: {
      variant: {
        default:
          "bg-white dark:bg-dark-800 border-gray-200 dark:border-gray-700",
        glass: "bg-glass backdrop-blur-md",
        gradient:
          "bg-gradient-to-br from-primary-500/10 to-purple-500/10 border-white/10",
      },
      hover: {
        default: "hover:shadow-lg",
        lift: "hover:-translate-y-1 hover:shadow-md",
        glow: "hover:shadow-primary-500/25 hover:border-primary-500/50",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: "default",
    },
  }
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  isAnimated?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hover, isAnimated = false, ...props }, ref) => {
    if (isAnimated) {
      // Only pass motion props and valid HTML props for motion.div
      const { onDrag, onDragEnd, onDragStart, ...rest } = props as any;
      return (
        <motion.div
          ref={ref}
          className={cn(cardVariants({ variant, hover, className }))}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          {...rest}
        />
      );
    }
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, hover, className }))}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export { Card, cardVariants };
