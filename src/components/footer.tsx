"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      ref={ref}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: reduceMotion ? 0.15 : 0.4, ease: "easeOut" }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 text-muted-foreground text-sm max-w-3xl mx-auto">
        <Sparkles className="w-5 h-5 text-pastel-purple" />
        <p className="text-center leading-relaxed italic">If you’re reading this, congrats—you’ve reached the footer. Now let’s build something awesome.</p>
      </div>
    </motion.footer>
  );
}
