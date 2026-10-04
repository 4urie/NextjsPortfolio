"use client";

import { motion, useReducedMotion, useSpring } from "motion/react";
import { useEffect } from "react";

import { useIsClient } from "@/hooks/use-is-client";

// A subtle trailing ring. The native cursor stays visible — this is an
// accent, not a replacement. Disabled for coarse pointers and reduced motion.
export function SmoothCursor() {
  const isClient = useIsClient();
  const reduced = useReducedMotion();

  const show =
    isClient &&
    reduced === false &&
    window.matchMedia("(pointer: fine)").matches;

  const cursorX = useSpring(0, { damping: 30, stiffness: 200, mass: 1 });
  const cursorY = useSpring(0, { damping: 30, stiffness: 200, mass: 1 });

  useEffect(() => {
    if (!show) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [show, cursorX, cursorY]);

  if (!show) {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100] size-6 rounded-full border border-foreground/40"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}
