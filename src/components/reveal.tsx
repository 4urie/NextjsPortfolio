"use client";

import { motion, useReducedMotion } from "motion/react";
import React from "react";

// Page-entrance stagger: elements fade up from 12px below over 700ms,
// staggered ~70ms apart down the page (capped at 330ms).
export function Reveal({
  index = 0,
  className,
  children,
}: {
  index?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: Math.min(0.05 + index * 0.07, 0.33),
      }}
    >
      {children}
    </motion.div>
  );
}
