"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({
  children,
  className = "",
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: reduceMotion ? 0.15 : 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
