'use client';

import { motion } from 'motion/react';
import { ParticleBackground } from './particles';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { Badge } from "@/components/ui/badge"
import {MapPin} from 'lucide-react'

export function Hero() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.2 : 0.8,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-visible pb-32 print:none">
      {/* Particle Background - Extended */}
      <div className="absolute inset-0 h-[150vh] -bottom-[80vh]">
        <ParticleBackground />
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          variants={wordVariants}
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-rose-400">
            Chris
          </span>
          <span className="text-foreground">.</span>
        </motion.h1>

        <motion.div
          className="space-y-4 mb-6"
          variants={wordVariants}
        >
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
            I build things, solve problems, and help people understand technical concepts without the jargon. I've spent my career bridging the gap between engineering teams and everyone else.
          </p>
        </motion.div>

        <motion.p
          className="text-base md:text-lg text-muted-foreground"
          variants={wordVariants}
        >
          <Badge variant="outline" className="rounded text-base">
            Based in <span className="text-rose-500">Victoria, BC</span>, and looking for new opportunities
          </Badge>
          
        </motion.p>
      </motion.div>
    </section>
  );
}
