"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ResumeHeader } from "./resume-header";
import { ProfessionalSummary } from "./professional-summary";
import { CoreCompetencies } from "./core-competencies";
import { ProfessionalExperience } from "./professional-experience";
import { RecentProjects } from "./recent-projects";
import { SkillsSection } from "./skills-section";
import { References } from "./references";

export function Resume() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.article
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0.2 : 0.6,
          ease: "easeOut",
          delay: 0.2,
        }}
        className="rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 border bg-white dark:bg-[#14161b] border-border"
      >
        <ResumeHeader />
        <ProfessionalSummary />
        <CoreCompetencies />
        <ProfessionalExperience />
        <RecentProjects />
        <SkillsSection />
        <References />
      </motion.article>
    </div>
  );
}
