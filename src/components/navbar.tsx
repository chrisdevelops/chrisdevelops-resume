"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useScroll } from "@/hooks/use-scroll";
import PrintScrollButton from "@/components/ui/print-button";

export function Navbar() {
  const scrolled = useScroll(20);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.nav
      initial={reduceMotion ? { opacity: 1 } : { y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 print:hidden ${
        scrolled
          ? "backdrop-blur-lg bg-[var(--navbar-bg)] border-b border-[var(--navbar-border)] shadow-sm"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Name */}
          <div className="text-xl font-bold text-foreground">Chris Lloyd</div>

          {/* Theme Toggle */}
          {mounted && (
            <div className="flex items-center gap-2">
              <PrintScrollButton />
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
            </div>
            
          )}
        </div>
      </div>
    </motion.nav>
  );
}
